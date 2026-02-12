# 🔗 URL Shortener Web Application

A secure and scalable **URL Shortener Platform** built using **Node.js, Express, MongoDB, and EJS**, featuring user authentication, visit tracking, and role-based access control.

This project demonstrates backend development, database integration, authentication handling, and real-world deployment practices.

---

## 📌 Project Overview

This application allows users to convert long URLs into short, shareable links while tracking usage analytics.
It also includes login functionality, protected routes, and role-based permissions (Admin / Normal user).

The system is designed following **MVC principles** and production-ready practices like environment configuration and secure cookie-based authentication.

---

## 🚀 Features

✅ User Authentication (Login System with Cookies)
✅ Role-Based Access Control (ADMIN / NORMAL users)
✅ Generate Short URLs instantly
✅ Redirect Short URL → Original URL
✅ Track Visit History (Click Analytics with timestamps)
✅ MongoDB Database Integration
✅ Clean UI using EJS Templates
✅ Environment-based Configuration (.env support)
✅ Middleware-based Route Protection
✅ Ready for Cloud Deployment

---

## 🛠️ Tech Stack

| Layer           | Technology Used             |
| --------------- | --------------------------- |
| Backend         | Node.js, Express.js         |
| Database        | MongoDB (Mongoose ODM)      |
| Frontend        | EJS Templating              |
| Authentication  | Cookies + Custom Middleware |
| Environment     | dotenv                      |
| Architecture    | MVC Pattern                 |
| Version Control | Git & GitHub                |

---

## 📂 Project Structure

```
ShortURL/
│
├── models/           # MongoDB Schemas
├── routes/           # Express Route Handlers
├── middleware/       # Authentication & Role Checks
├── views/            # EJS Templates (Frontend)
├── connect.js        # MongoDB Connection Logic
├── index.js          # Main Server Entry Point
├── .env              # Environment Variables
└── package.json
```

---

## 🔐 Authentication & Security

* Cookie-based session handling
* Route-level authorization using middleware
* Protected URL generation (only logged-in users)
* Environment variables used for sensitive data

---

## 📊 How It Works

1️⃣ User registers or logs into the system
2️⃣ Server generates a JWT token on successful authentication
3️⃣ Token is sent to the client and used to access protected routes
4️⃣ User submits a long URL
5️⃣ System generates a unique shortId
6️⃣ Short link is created:

```
http://localhost:8001/<shortId>
```

5️⃣ When accessed:

* Redirects to original URL
* Stores visit timestamp in database

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create `.env` File

```
PORT=8001
MONGO_CONN=your_mongodb_connection_string
```

### 4️⃣ Start the Server

```bash
npm start
```

Server runs at:

```
http://localhost:8001
```

---

## 💡 Learning Outcomes

This project showcases:

* Building RESTful applications using Express
* JWT-based authentication and secure route protection
* Database schema design with MongoDB
* Middleware-driven authentication
* Server-side rendering using EJS
* Real-world debugging & routing practices
* Deployment-ready Node.js structure

---


⭐ *If you found this project useful, feel free to star the repository!*

