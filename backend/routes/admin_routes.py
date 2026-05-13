from fastapi import APIRouter
from models.admin import AdminLogin
from controllers.admin_controller import admin_login

router = APIRouter(prefix="/api/admin", tags=["Admin"])

@router.post("/login")
def login(data: AdminLogin):
    return admin_login(data)