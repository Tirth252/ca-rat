from models import Jewelry
import motor.motor_asyncio
import environ
env = environ.Env()
environ.Env.read_env()

client = motor.motor_asyncio.AsyncIOMotorClient(env("MONGODB_URI"))

database = client.Caart
collection = database.Jewelry


async def fetchJewelry(id):
    doc = collection.find_one({"id": id})
    return doc
