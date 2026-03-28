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
  db.query("SELECT * FROM students", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
