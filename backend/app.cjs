const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

const port = 9000;

// Apply CORS middleware before routes
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from localhost:5173
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
  })
);

// Basic route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// API route that returns JSON data
app.get("/api", (req, res) => {
  const filePath = `${__dirname}/data/data.json`; // Ensure this path is correct
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read file" });
    }
    res.setHeader("Content-Type", "application/json");
    res.json(JSON.parse(data));
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
