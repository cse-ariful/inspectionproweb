from pydantic import BaseModel, HttpUrl
from typing import List, Optional
from datetime import datetime

class Feature(BaseModel):
    name: str
    value: str

class ItemBase(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    category_id: int
    features: List[Feature] = []
    image_urls: List[HttpUrl] = []
    stock: int = 0

class ItemCreate(ItemBase):
    pass

class Item(ItemBase):
    id: int
    rating: float = 0.0
    review_count: int = 0
    created_at: datetime
    updated_at: datetime 