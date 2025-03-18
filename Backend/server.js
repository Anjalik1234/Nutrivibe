require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Added missing CORS import
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

// Serve frontend files
app.use(express.static(path.join(__dirname, "public")));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB connected"))
    .catch(err => console.error("❌ MongoDB connection error:", err));

// API Routes
const userRoutes = require("./routes/authRoutes");
app.use("/api/users", userRoutes);

// Serve signup page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/Homepage/index.html"));
});

// Serve signup page
app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "public/sign up/index.html"));
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
