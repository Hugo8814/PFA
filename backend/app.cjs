require("dotenv").config({ path: `${__dirname}/.env` });

const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Transaction = require("./data/Transaction.cjs"); // Ensure this path is correct

const app = express();
const port = 9000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.error("MongoDB connection error:", err));

// User schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// User model
const User = mongoose.model("User", userSchema);

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

// User login
app.post("/auth/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.SECRET_KEY,
      { expiresIn: "2h" }
    );

    // Return the token as part of the response
    res.json({ message: "Login successful", token });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Failed to login" });
  }
});

// Middleware to verify JWT token
function authenticateToken(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Access denied" });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      console.error("Token verification error:", err); // Added for debugging
      return res.status(403).json({ error: "Invalid token" });
    }

    req.user = user; // Store user data from token
    next();
  });
}

// Example protected route
app.get("/api/protected", authenticateToken, (req, res) => {
  res.json({ message: `Hello, ${req.user.username}! This is protected data.` });
});

// Endpoint to handle new transactions
app.post("/api/transactions", authenticateToken, async (req, res) => {
  const newTransaction = new Transaction({
    ...req.body,
    userId: req.user.userId, // Ensure this is correct
  });
  try {
    const savedTransaction = await newTransaction.save();
    res.status(201).json(savedTransaction);
  } catch (error) {
    console.error("Error saving transaction:", error);
    res.status(500).json({ error: "Failed to save transaction" });
  }
});

// GET endpoint to retrieve all transactions
app.get("/api/transactions", authenticateToken, async (req, res) => {
  // Ensure authentication is applied
  try {
    const transactions = await Transaction.find({ userId: req.user.userId }); // Fetch transactions for the authenticated user
    res.status(200).json(transactions);
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
});

// Endpoint to handle API responses
app.get("/api", authenticateToken, async (req, res) => {
  try {
    // Fetch user-specific transactions
    const transactions = await Transaction.find({ userId: req.user.userId });

    const response = {
      balance: {}, // Calculate or fetch user balance as needed
      transactions: transactions,
      budgets: [], // Fetch user budgets if necessary
      pots: [], // Fetch user pots if necessary
    };

    res.json(response);
  } catch (err) {
    console.error("Error fetching user data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
