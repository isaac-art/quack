import stripe
import secrets
from fastapi import FastAPI

stripe.api_key = secrets.STRIPE_SECRET_KEY
app = FastAPI()

@app.get("/")
async def root():
    return {"message": "quack quack - 🦆"}

@app.get("/subscriptions/{limit}")
async def subscriptions(limit):
    print(stripe.VERSION)
    return stripe.Subscriptions.list(limit=limit)