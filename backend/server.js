const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "richa",
  password: "password123",
  database: "college_db"
});

db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

// API Route
app.get("/students", (req, res) => {
  res.send(`
  <html>
  <head>
    <title>ABC College</title>
    <style>
      body { margin: 0; font-family: Arial; }

      /* Navbar */
      .navbar {
        background: #2c3e50;
        color: white;
        padding: 15px;
        display: flex;
        justify-content: space-between;
      }
      .navbar a {
        color: white;
        margin: 0 10px;
        text-decoration: none;
      }

      /* Hero section */
      .hero {
        background: linear-gradient(#3b82f6, #1e3a8a);
        color: white;
        text-align: center;
        padding: 60px 20px;
      }

      /* Cards */
      .container {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin: 40px;
      }
      .card {
        background: white;
        padding: 20px;
        width: 200px;
        text-align: center;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      }

      /* Footer */
      .footer {
        text-align: center;
        padding: 20px;
        background: #eee;
      }
    </style>
  </head>

  <body>

    <div class="navbar">
      <div><b>ABC College</b></div>
      <div>
        <a href="#">Home</a>
        <a href="#">Courses</a>
        <a href="#">Students</a>
        <a href="#">Contact</a>
      </div>
    </div>

    <div class="hero">
      <h1>Welcome to ABC College Portal</h1>
      <p>Manage students, courses, and results easily</p>
    </div>

    <div class="container">
      <div class="card">Students</div>
      <div class="card">Courses</div>
      <div class="card">Results</div>
    </div>

    <div class="footer">
      © 2026 ABC College
    </div>

  </body>
  </html>
  `);
});
app.listen(5000, '0.0.0.0', () => {
  console.log("Server running on port 5000");
});
