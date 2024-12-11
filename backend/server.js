const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/userRoutes"); // Import user routes (register/login)
const appointmentRoutes = require("./routes/appointmentRoutes"); // Import appointment routes (book appointments, get schedules)
const { protect } = require("./middleware/authMiddleware"); // Import protect middleware for authenticated routes
const connectDB = require("./config/db"); // Import the database connection function

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Enable Cross-Origin Resource Sharing (CORS)
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

// Public routes for authentication (register and login)
app.use("/api/users", authRoutes); // Authentication routes: register, login, profile (with JWT)

// Protected routes (appointment-related)
app.use("/api/appointments", protect, appointmentRoutes); // Appointment routes: book, get schedule

// Handle 404 errors (routes that are not found)
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
