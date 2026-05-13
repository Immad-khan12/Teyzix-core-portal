from fastapi import APIRouter
from controllers.internship_controller import get_all_internships

router = APIRouter(prefix="/api/internships", tags=["Internships"])

@router.get("/")
def list_internships():
    return get_all_internships()