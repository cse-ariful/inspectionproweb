from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
from models.item import Item, ItemCreate, Feature
from datetime import datetime
from routes.reviews import get_item_rating
import random

router = APIRouter()

# Simulate a database with a list
items_db: List[Item] = []

@router.get("/items", response_model=List[Item])
async def get_items(
    skip: int = 0,
    limit: int = 10,
    category_id: Optional[int] = None,
    min_price: Optional[float] = None,
    max_price: Optional[float] = None,
    search: Optional[str] = None
):
    filtered_items = items_db

    if category_id:
        filtered_items = [item for item in filtered_items if item.category_id == category_id]
    
    if min_price is not None:
        filtered_items = [item for item in filtered_items if item.price >= min_price]
    
    if max_price is not None:
        filtered_items = [item for item in filtered_items if item.price <= max_price]
    
    if search:
        filtered_items = [
            item for item in filtered_items 
            if search.lower() in item.name.lower() or 
               (item.description and search.lower() in item.description.lower())
        ]

    return filtered_items[skip : skip + limit]

@router.post("/items", response_model=Item)
async def create_item(item: ItemCreate):
    new_item = Item(
        id=len(items_db) + 1,
        created_at=datetime.now(),
        updated_at=datetime.now(),
        **item.dict()
    )
    items_db.append(new_item)
    return new_item

@router.get("/items/{item_id}", response_model=Item)
async def get_item(item_id: int):
    item = next((item for item in items_db if item.id == item_id), None)
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    
    # Update rating
    item.rating = await get_item_rating(item_id)
    return item

@router.patch("/items/{item_id}/features")
async def update_item_features(item_id: int, features: List[Feature]):
    item = next((item for item in items_db if item.id == item_id), None)
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    
    item.features = features
    item.updated_at = datetime.now()
    return item 