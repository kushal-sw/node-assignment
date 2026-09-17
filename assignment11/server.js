const express = require("express");
const mongoose = require("mongoose");

const teacherRouter = require("./router/teacherRouter");
const studentRouter = require("./router/studentRouter");

const app = express();
const PORT = 5000;
const MONGO_URI = "mongodb://127.0.0.1:27017/schoolDB"; // change if using Atlas

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log(" MongoDB connected successfully"))
  .catch((err) => console.error(" MongoDB connection error:", err));

// Routes
app.use("/teacher", teacherRouter);
app.use("/student", studentRouter);

// Root route
app.get("/", (req, res) => {
  res.send("Teacher & Student Registration API is running");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});