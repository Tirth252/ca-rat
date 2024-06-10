from pydantic import BaseModel, EmailStr, Field
from datetime import date, datetime
from fastapi.encoders import jsonable_encoder
from typing import List, Optional, Union


class DimondDetails(BaseModel):

    color: List[str] = []
    clarity: str
    weight: int


class JewelryDetails(BaseModel):
    goldWeight: int
    goldPurity: int
    goldColor: List[str] = []


class User(BaseModel):

    id: int = Field(None, alias="_id")
    username: str
    password: str
    email: EmailStr
    userType: int  # 1: Customer, 2: merchent, 3: admin, 4: superuser
    dateCreated: datetime
    dateModified: datetime
    gender: int    # 1: Female, 2: Male, 3: Other
    addresses: str

    def to_json(self):
        return jsonable_encoder(self, exclude_none=True)

    def to_bson(self):
        data = self.dict(by_alias=True, exclude_none=True)
        return data


class Jewelry(BaseModel):
    # id: int = Field(None, alias="_id")
    name: str
    category: int  # 1: necklace, 2: Ring, 3: Pendent, 4: Earings, 5: Belt buckles
    price: int
    merchant: int
    discription: str
    availColors: List[str] = []
    availSize: List[int] = []
    refNo: int
    images: List[str] = []
    dateCreated: datetime
    dateModified: datetime
    dimondDetails: DimondDetails
    jewelryDetails: JewelryDetails

    def to_json(self):
        return jsonable_encoder(self, exclude_none=True)

    def to_bson(self):
        data = self.dict(by_alias=True, exclude_none=True)
        return data
