const express = require("express");
const {
  registerUser,
  loginUser,
  getUserProfile,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register/:role", registerUser);

// Login route
router.post("/login", loginUser);

// Protected route to get user profile
router.get("/profile", protect, getUserProfile);

module.exports = router;
