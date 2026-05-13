from models.admin import AdminLogin
from utils.jwt_handler import create_access_token
from fastapi import HTTPException
import os

def admin_login(data: AdminLogin):
    admin_email = os.getenv("ADMIN_EMAIL")
    admin_password = os.getenv("ADMIN_PASSWORD")
    
    if data.email != admin_email or data.password != admin_password:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    token = create_access_token({"sub": data.email, "role": "admin"})
    return {"access_token": token, "token_type": "bearer"}