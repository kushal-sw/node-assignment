const express = require("express");
const bcrypt = require("bcrypt");
const Student = require("../model/studentModel");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, password, course, age } = req.body;

    // Basic validation
    if (!name || !email || !password || !course || !age) {
      return res.status(400).json({
        success: false,
        message: "All fields (name, email, password, course, age) are required",
      });
    }

    // Check if student already exists
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(409).json({
        success: false,
        message: "Student with this email already exists",
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save student
    const newStudent = new Student({
      name,
      email,
      password: hashedPassword,
      course,
      age,
    });

    await newStudent.save();

    res.status(201).json({
      success: true,
      message: "Student registered successfully",
      data: {
        id: newStudent._id,
        name: newStudent.name,
        email: newStudent.email,
        course: newStudent.course,
        age: newStudent.age,
      },
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ success: false, message: messages.join(", ") });
    }
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
});

module.exports = router;