from fastapi import APIRouter, HTTPException, Depends
from typing import List
from models.review import Review, ReviewCreate
from datetime import datetime
from routes.auth import get_current_user
from models.user import User

router = APIRouter()
reviews_db: List[Review] = []

@router.get("/items/{item_id}/reviews", response_model=List[Review])
async def get_item_reviews(item_id: int, skip: int = 0, limit: int = 10):
    item_reviews = [review for review in reviews_db if review.item_id == item_id]
    return item_reviews[skip : skip + limit]

@router.post("/reviews", response_model=Review)
async def create_review(review: ReviewCreate, current_user: User = Depends(get_current_user)):
    # Check if user already reviewed this item
    existing_review = next(
        (r for r in reviews_db if r.user_id == current_user.id and r.item_id == review.item_id),
        None
    )
    if existing_review:
        raise HTTPException(status_code=400, detail="User already reviewed this item")

    new_review = Review(
        id=len(reviews_db) + 1,
        created_at=datetime.now(),
        **review.dict()
    )
    reviews_db.append(new_review)
    return new_review

async def get_item_rating(item_id: int) -> float:
    item_reviews = [review for review in reviews_db if review.item_id == item_id]
    if not item_reviews:
        return 0.0
    return sum(review.rating for review in item_reviews) / len(item_reviews) 