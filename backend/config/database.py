from pymongo import MongoClient
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime


# MongoDB Atlas Connection
client = MongoClient(
    "mongodb+srv://immad216:Pakistan_00@cluster0.kwheeti.mongodb.net/teyzix_portal?retryWrites=true&w=majority&appName=Cluster0"
)

# Database Name
db = client["teyzix_portal"]

# Collections
internships_collection = db["internships"]
applications_collection = db["applications"]
admins_collection = db["admins"]


# Internship Model
class Internship(BaseModel):
    title: str
    duration: str
    stipend: str
    location: str
    skills: List[str]
    description: str
    createdAt: Optional[datetime] = None