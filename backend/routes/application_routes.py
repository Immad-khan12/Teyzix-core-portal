from fastapi import APIRouter, Depends
from models.application import Application
from controllers.application_controller import submit_application, get_all_applications, delete_application
from middleware.auth import require_admin

router = APIRouter(prefix="/api/applications", tags=["Applications"])

@router.post("/")
def apply(data: Application):
    return submit_application(data)

@router.get("/")
def all_applications(admin=Depends(require_admin)):
    return get_all_applications()

@router.delete("/{app_id}")
def remove_application(app_id: str, admin=Depends(require_admin)):
    return delete_application(app_id)