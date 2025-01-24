from fastapi import APIRouter, HTTPException
from typing import List
from models.category import Category, CategoryCreate

router = APIRouter()
categories_db: List[Category] = []

@router.get("/categories", response_model=List[Category])
async def get_categories():
    return categories_db

@router.post("/categories", response_model=Category)
async def create_category(category: CategoryCreate):
    new_category = Category(
        id=len(categories_db) + 1,
        **category.dict()
    )
    categories_db.append(new_category)
    return new_category

@router.get("/categories/{category_id}/items")
async def get_items_by_category(category_id: int):
    from routes.items import items_db
    return [item for item in items_db if item.category_id == category_id] 