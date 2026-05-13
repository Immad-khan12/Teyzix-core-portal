
# TEYZIX CORE Internship Portal

A full-stack internship portal built with React, FastAPI, and MongoDB Atlas.

## Live Links
- Frontend: https://your-app.vercel.app
- Backend: https://your-api.onrender.com
- API Docs: https://your-api.onrender.com/docs

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React + Vite + Tailwind CSS + Framer Motion |
| Backend | Python FastAPI |
| Database | MongoDB Atlas |
| Auth | JWT Tokens |
| Deployment | Vercel + Render |

## Features
- Browse available internships with search and filter
- Multi-step application form with validation
- Admin dashboard to manage applications
- JWT authentication for admin
- Budget/Pricing plans
- Open positions showcase
- Contact form with budget selector
- Fully responsive design

## Project Structure

teyzix-core-portal/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── services/
│   │   ├── routes/
│   │   └── context/
│   └── package.json
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── config/
│   ├── middleware/
│   └── main.py
└── README.md

## Setup Instructions

### Backend Setup
cd backend
python -m venv venv
venv\Scripts\activate
pip install fastapi uvicorn pymongo python-dotenv pydantic[email] python-jose[cryptography] passlib[bcrypt] python-multipart
uvicorn main:app --reload

### Frontend Setup
cd frontend
npm install
npm run dev

## Environment Variables

### Backend (.env)
MONGODB_URI=your_mongodb_connection_string
DB_NAME=teyzix_portal
SECRET_KEY=your_secret_key
ADMIN_EMAIL=admin@teyzix.com
ADMIN_PASSWORD=admin123

### Frontend (.env)
VITE_API_URL=http://localhost:8000

## API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | /api/internships/ | No | Get all internships |
| POST | /api/applications/ | No | Submit application |
| GET | /api/applications/ | JWT | Get all applications |
| DELETE | /api/applications/{id} | JWT | Delete application |
| POST | /api/admin/login | No | Admin login |

## Admin Access
- URL: /admin
- Email: admin@teyzix.com
- Password: admin123

## Deployment

### Frontend on Vercel
1. Push code to GitHub
2. Connect repo to Vercel
3. Set Root Directory: frontend
4. Add env variable: VITE_API_URL=https://your-backend.onrender.com
5. Deploy

### Backend on Render
1. Connect repo to Render
2. Set Root Directory: backend
3. Build Command: pip install -r requirements.txt
4. Start Command: uvicorn main:app --host 0.0.0.0 --port $PORT
5. Add all .env variables
6. Deploy

## Requirements.txt (Backend)
fastapi
uvicorn
pymongo
python-dotenv
pydantic[email]
python-jose[cryptography]
passlib[bcrypt]
python-multipart

## Contact
- Email: info@teyzixcore.com
- Location: Lahore, Pakistan

---
TEYZIX CORE — Core of Innovation | May 2026
