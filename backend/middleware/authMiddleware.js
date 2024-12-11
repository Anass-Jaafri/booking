const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  const token =
    req.header("Authorization") && req.header("Authorization").split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user info to request
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

const isBarber = (req, res, next) => {
  if (req.user && req.user.role === "barber") {
    next(); // Proceed if the user is a barber
  } else {
    res.status(403).json({ message: "Access denied" });
  }
};

module.exports = { protect, isBarber };
