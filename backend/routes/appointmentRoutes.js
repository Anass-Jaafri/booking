const express = require("express");
const {
  bookAppointment,
  getBarberSchedule,
} = require("../controllers/appointmentController");
const { protect, isBarber } = require("../middleware/authMiddleware");

const router = express.Router();

// Client route to book an appointment
router.post("/book", protect, bookAppointment); // protect: only logged-in client can book

// Barber route to get their own schedule
router.get("/schedule", protect, isBarber, getBarberSchedule);

module.exports = router;
