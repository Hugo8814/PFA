const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const app = express();
const port = 9000;

const usersFilePath = `${__dirname}/data/users.json`;
const secretKey = "yourSecretKey"; // Store securely (e.g., in environment variables)

// Middleware for CORS and parsing JSON
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json()); // To parse JSON request bodies

// Basic route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// API route that returns JSON data
app.get("/api", (req, res) => {
  const filePath = `${__dirname}/data/data.json`;
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read file" });
    }
    res.setHeader("Content-Type", "application/json");
    res.json(JSON.parse(data));
  });
});

// User registration
app.post("/auth/register", (req, res) => {
  const { username, password } = req.body;

  fs.readFile(usersFilePath, "utf-8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read user data" });

    const users = JSON.parse(data);
    const userExists = users.find((user) => user.username === username);

    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }

    bcrypt.hash(password, 10, (err, hash) => {
      if (err)
        return res.status(500).json({ error: "Failed to hash password" });

      users.push({ username, password: hash });

      fs.writeFile(usersFilePath, JSON.stringify(users), (err) => {
        if (err) return res.status(500).json({ error: "Failed to save user" });

        res.status(201).json({ message: "User registered successfully" });
      });
    });
  });
});

// User login
app.post("/auth/login", (req, res) => {
  const { username, password } = req.body;

  fs.readFile(usersFilePath, "utf-8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read user data" });

    const users = JSON.parse(data);
    const user = users.find((user) => user.username === username);

    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err || !isMatch) {
        return res.status(400).json({ error: "Invalid credentials" });
      }

      // Generate JWT token
      const token = jwt.sign({ username: user.username }, secretKey, {
        expiresIn: "1h",
      });
      res.json({ message: "Login successful", token });
    });
  });
});

// Middleware to verify JWT token
function authenticateToken(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) return res.status(401).json({ error: "Access denied" });

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid token" });

    req.user = user;
    next();
  });
}

// Example protected route
app.get("/api/protected", authenticateToken, (req, res) => {
  res.json({ message: `Hello, ${req.user.username}! This is protected data.` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
