from config.database import applications_collection
from models.application import Application
from datetime import datetime
from bson import ObjectId
from fastapi import HTTPException

def serialize(doc):
    doc["_id"] = str(doc["_id"])
    return doc

def submit_application(data: Application):
    existing = applications_collection.find_one({"email": data.email, "domain": data.domain})
    if existing:
        raise HTTPException(status_code=400, detail="You have already applied for this domain.")
    
    app_dict = data.dict()
    app_dict["createdAt"] = datetime.utcnow()
    result = applications_collection.insert_one(app_dict)
    return {"message": "Application submitted successfully!", "id": str(result.inserted_id)}

def get_all_applications():
    apps = list(applications_collection.find().sort("createdAt", -1))
    return [serialize(a) for a in apps]

def delete_application(app_id: str):
    result = applications_collection.delete_one({"_id": ObjectId(app_id)})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Application not found")
    return {"message": "Application deleted successfully"}