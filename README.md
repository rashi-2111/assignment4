#  MERN Stack Authentication & CRUD App (MySQL)

A full-stack web application built using the **MERN stack with MySQL** that provides secure user authentication and a dashboard with complete CRUD (Create, Read, Update, Delete) functionality.

---

## Project Overview

This project demonstrates:

* User authentication (Register, Login, Forgot Password, Reset Password)
* Secure JWT-based authorization
* Dashboard with CRUD operations
* MySQL relational database integration
* Full frontend + backend communication

---

## Tech Stack

### Frontend

* React.js (Vite)
* Tailwind CSS
* Axios
* React Router DOM
* Context API

### Backend

* Node.js
* Express.js
* MySQL (mysql2)
* JWT (jsonwebtoken)
* bcryptjs
* Nodemailer
* dotenv

---

## 📁 Project Structure

```
mern-mysql-auth-crud/
│
├── backend/
│   ├── config/db.js
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   └── database.sql
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── context/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.css
│   ├── tailwind.config.js
│   └── package.json
│
└── README.md
```

---

## Features

### Authentication

* User Registration
* User Login
* Forgot Password (Email-based)
* Reset Password
* JWT Authentication
* Protected Routes

### Dashboard

* View all items
* Add new item
* Edit item
* Delete item
* Status management (Active / Pending / Completed)
* User-specific data

---

##  Database Setup (MySQL)

1. Install MySQL
2. Create database:

```sql
CREATE DATABASE mern_auth_db;
```

3. Import schema:

```bash
mysql -u root -p mern_auth_db < database.sql
```

---

## Backend Setup

```bash
cd backend
npm install
```

### Create `.env` file:

```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=mern_auth_db
JWT_SECRET=your_secret
JWT_EXPIRE=7d
```

### Run Backend:

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
```

### Run Frontend:

```bash
npm run dev
```

---

## 🔗 API Endpoints

### Auth Routes

| Method | Endpoint                  |
| ------ | ------------------------- |
| POST   | /api/auth/register        |
| POST   | /api/auth/login           |
| POST   | /api/auth/forgot-password |
| POST   | /api/auth/reset-password  |
| GET    | /api/auth/me              |

### Item Routes (Protected)

| Method | Endpoint       |
| ------ | -------------- |
| GET    | /api/items     |
| GET    | /api/items/:id |
| POST   | /api/items     |
| PUT    | /api/items/:id |
| DELETE | /api/items/:id |

---

## Security Features

* Password hashing using bcrypt
* JWT-based authentication
* Protected API routes
* Environment variables for sensitive data
* SQL Injection prevention (parameterized queries)

---

##  Screenshots

Include these in your repo:

* Login Page
* Register Page
* Dashboard
* CRUD Operations
* MySQL Tables

---

##  Important Notes

* Do NOT commit `.env` file
* Always use parameterized SQL queries
* Ensure MySQL server is running
* Test APIs using Postman before frontend

---

## Future Improvements

* Profile page
* Dark mode
* Search & filter
* Pagination
* Image upload
* Email verification

---

##  Author

Rashi 

---

## Acknowledgement

This project was developed as part of a full-stack assignment by CampusPe 

---

