from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from routes import internship_routes, application_routes, admin_routes
from controllers.internship_controller import seed_internships

load_dotenv()

app = FastAPI(title="TEYZIX CORE API", version="1.0.0")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:5174", "https://your-vercel-app.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(internship_routes.router)
app.include_router(application_routes.router)
app.include_router(admin_routes.router)

@app.on_event("startup")
def startup():
    #seed_internships()
    pass

@app.get("/")
def root():
    return {"message": "TEYZIX CORE API is running 🚀"}
