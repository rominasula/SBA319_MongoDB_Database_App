# Kids Moments 🧒📸

A MongoDB + Express app to manage teachers, children, and special daycare moments.

## 🚀 Technologies
- Node.js
- Express
- MongoDB + Mongoose
- dotenv
- Plain HTML + JS frontend

## 🧾 Collections
- **Teachers** – name, email, classroom  
- **Children** – name, age, parentEmail, classroom  
- **Moments** – title, description, date, childName, teacherName

## 📡 API Routes

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | /api/teachers | Get all teachers |
| POST | /api/teachers | Add a teacher |
| PUT | /api/teachers/:id | Update a teacher |
| DELETE | /api/teachers/:id | Delete a teacher |
| GET | /api/children | Get all children |
| POST | /api/children | Add a child |
| PUT | /api/children/:id | Update a child |
| DELETE | /api/children/:id | Delete a child |
| GET | /api/moments | Get all moments |
| POST | /api/moments | Add a moment |
| PUT | /api/moments/:id | Update a moment |
| DELETE | /api/moments/:id | Delete a moment |

## 🧰 Setup

```bash
npm install
npm run dev

## Author

Created as part of the SBA 319: MongoDB Database Application

## Getting Started

1. Clone the repository:
   
  https://github.com/rominasula/SBA319_MongoDB_Database_App

Created by **Romina Dervishi**  
GitHub: [rominasula](https://github.com/rominasula)


