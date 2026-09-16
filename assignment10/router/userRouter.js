const express = require("express");
const router = express.Router();
const db = require("../config/firebase");
const userSchema = require("../schema/userSchema");

// POST /api/users — validate and store in Firestore
router.post("/", async (req, res) => {
  try {
    // Validate incoming data
    const { error, value } = userSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        message: "Validation failed",
        error: error.details[0].message,
      });
    }

    // Store valid data in Firestore "users" collection
    const docRef = await db.collection("users").add(value);

    res.status(201).json({
      message: "User stored successfully",
      id: docRef.id,
      user: value,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;