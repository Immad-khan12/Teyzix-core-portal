from config.database import internships_collection
from datetime import datetime
from bson import ObjectId

def serialize(doc):
    doc["_id"] = str(doc["_id"])
    return doc

def get_all_internships():
    internships = list(internships_collection.find())
    return [serialize(i) for i in internships]

def seed_internships():
    """Seed sample internships if collection is empty"""
    if internships_collection.count_documents({}) == 0:
        sample = [
            {
                "title": "Frontend Developer Intern",
                "duration": "2 Months",
                "stipend": "PKR 5,000/month",
                "location": "Remote",
                "skills": ["React", "Tailwind CSS", "JavaScript"],
                "description": "Work on real-world frontend projects using React and modern CSS frameworks.",
                "createdAt": datetime.utcnow()
            },
            {
                "title": "Backend Developer Intern",
                "duration": "2 Months",
                "stipend": "PKR 5,000/month",
                "location": "Remote",
                "skills": ["Python", "FastAPI", "MongoDB"],
                "description": "Build scalable REST APIs and work with databases in a real startup environment.",
                "createdAt": datetime.utcnow()
            },
            {
                "title": "Full Stack Developer Intern",
                "duration": "3 Months",
                "stipend": "PKR 8,000/month",
                "location": "Hybrid",
                "skills": ["React", "Node.js", "MongoDB", "Tailwind"],
                "description": "End-to-end development of web applications from design to deployment.",
                "createdAt": datetime.utcnow()
            },
            {
                "title": "UI/UX Design Intern",
                "duration": "2 Months",
                "stipend": "PKR 4,000/month",
                "location": "Remote",
                "skills": ["Figma", "Adobe XD", "Prototyping"],
                "description": "Design beautiful and user-friendly interfaces for web and mobile applications.",
                "createdAt": datetime.utcnow()
            },
            {
                "title": "Data Science Intern",
                "duration": "3 Months",
                "stipend": "PKR 7,000/month",
                "location": "Remote",
                "skills": ["Python", "Pandas", "Machine Learning", "SQL"],
                "description": "Analyze data, build ML models, and derive actionable business insights.",
                "createdAt": datetime.utcnow()
            },
            {
                "title": "DevOps Intern",
                "duration": "2 Months",
                "stipend": "PKR 6,000/month",
                "location": "Onsite",
                "skills": ["Docker", "CI/CD", "Linux", "AWS"],
                "description": "Learn and implement DevOps practices including CI/CD pipelines and cloud deployments.",
                "createdAt": datetime.utcnow()
            }
        ]
        internships_collection.insert_many(sample)