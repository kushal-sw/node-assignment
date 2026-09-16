const express = require("express");
const router = express.Router();
const User = require("../model/usermodel");

// POST /api/users - create a new user
router.post("/users", async (req, res) => {
  try {
    const { name, email, age, course } = req.body;
    const newUser = new User({ name, email, age, course });
    const savedUser = await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      data: savedUser
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating user",
      error: error.message
    });
  }
});

// GET /api/users - fetch all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "Users fetched successfully",
      data: users
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching users",
      error: error.message
    });
  }
});

module.exports = router;