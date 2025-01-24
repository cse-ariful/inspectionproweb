from pydantic import BaseModel
from datetime import datetime

class ReviewBase(BaseModel):
    rating: int
    comment: str | None = None

class ReviewCreate(ReviewBase):
    item_id: int
    user_id: int

class Review(ReviewBase):
    id: int
    item_id: int
    user_id: int
    created_at: datetime 