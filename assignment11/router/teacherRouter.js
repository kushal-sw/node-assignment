const express = require("express");
const bcrypt = require("bcrypt");
const Teacher = require("../model/teacherModel");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, password, subject } = req.body;

    // Basic validation
    if (!name || !email || !password || !subject) {
      return res.status(400).json({
        success: false,
        message: "All fields (name, email, password, subject) are required",
      });
    }

    // Check if teacher already exists
    const existingTeacher = await Teacher.findOne({ email });
    if (existingTeacher) {
      return res.status(409).json({
        success: false,
        message: "Teacher with this email already exists",
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save teacher
    const newTeacher = new Teacher({
      name,
      email,
      password: hashedPassword,
      subject,
    });

    await newTeacher.save();

    res.status(201).json({
      success: true,
      message: "Teacher registered successfully",
      data: {
        id: newTeacher._id,
        name: newTeacher.name,
        email: newTeacher.email,
        subject: newTeacher.subject,
      },
    });
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ success: false, message: messages.join(", ") });
    }
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
});

module.exports = router;