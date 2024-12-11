const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Register new User (client/barber)
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const { role } = req.params;
  try {
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "User already exist" });
    }

    const user = new User({
      name,
      email,
      password,
      role,
    });

    await user.save();

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "8h" }
    );
    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message:
        "There was an error while creating your account. Please try again.",
      error,
    });
  }
};

// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { is: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "8h" }
      );
      res.json({
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Login Failed", error });
  }
};

// Get user Profile
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching profile", error });
  }
};

module.exports = { registerUser, loginUser, getUserProfile };
