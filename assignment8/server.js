const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./router/userRouter");

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());

// MongoDB connection
const MONGO_URI = "mongodb://127.0.0.1:27017/userDB"; // change if using Atlas

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB connection failed:", err.message));

// Routes
app.use("/api", userRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});