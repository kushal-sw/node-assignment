const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../model/userModel");

// ... your existing POST and GET routes stay here ...

// PATCH /api/users/:id — update user
router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true } // return updated doc, validate schema
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// DELETE /api/users/:id — delete user
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});
// POST /api/users — create user
router.post("/", async (req, res) => {
  try {
    const { name, email, age, course } = req.body;

    // Basic validation
    if (!name || !email || !age || !course) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newUser = new User({ name, email, age, course });
    await newUser.save();

    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    // Handles duplicate email (unique constraint) and validation errors
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already exists" });
    }
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;