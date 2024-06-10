import motor.motor_asyncio
from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from typing import Union, Annotated
from pydantic import BaseModel
from flask_pymongo import PyMongo
import environ

from models import Jewelry


app = FastAPI()
env = environ.Env()
environ.Env.read_env()

client = motor.motor_asyncio.AsyncIOMotorClient(env("MONGO_URI"))

database = client.caart
collection = database.caart


async def fetchJewelry(id):
    doc = collection.find_one({"id": id})
    return doc


async def createJewelry(data):
    doc = await collection.insert_one(data)
    return doc

origins = ['*']
app.add_middleware(CORSMiddleware,
                   allow_origins=origins, allow_credentials=True,
                   allow_methods=["*"],
                   allow_headers=["*"])


class Item(BaseModel):
    name: str
    price: float | None = None
    is_offer: Union[bool, None] = None


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.put("/items/{item_id}")
async def update_item(item_id: int, item: Item):
    return item


@app.get("/items/")
async def read_items(q: Annotated[str | None, Query(max_length=5)] = None):
    results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
    if q:
        results.update({"q": q})
    return results


@app.post("/createJewelry/", response_model=Jewelry)
async def post_jewelry(data: Jewelry):
    response = await createJewelry(data.to_bson())
    return response
