from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class Application(BaseModel):
    name: str
    email: EmailStr
    phone: str
    domain: str
    message: str
    resume: Optional[str] = None
    createdAt: Optional[datetime] = None