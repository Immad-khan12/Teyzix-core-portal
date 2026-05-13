from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from routes import internship_routes, application_routes, admin_routes

load_dotenv()

app = FastAPI(title="TEYZIX CORE API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
        "https://teyzix-core-portal.netlify.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(internship_routes.router)
app.include_router(application_routes.router)
app.include_router(admin_routes.router)

@app.get("/")
def root():
    return {"message": "TEYZIX CORE API is running"}
