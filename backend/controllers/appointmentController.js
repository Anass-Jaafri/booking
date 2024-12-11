const Appointment = require("../models/Appointment");
const User = require("../models/User");

// Book an appointment (client)
const bookAppointment = async (req, res) => {
  const { date, service, barberId } = req.body;
  try {
    // Find the barber by the provided ID
    const barber = await User.findOne({ _id: barberId, role: "barber" });

    // If no barber is found, return an error
    if (!barber) {
      return res.status(400).json({ message: "Invalid user" });
    }

    // Check if the barber is already booked for the provided date and time
    const existingAppointment = await Appointment.findOne({
      barber: barberId,
      date,
    });

    // If there is an existing appointment, the barber is already booked
    if (existingAppointment) {
      return res
        .status(400)
        .json({ message: "Barber already booked at this time" });
    }

    // Create a new appointment
    const appointment = new Appointment({
      user: req.user._id, // Automatically set to the logged-in client
      barber: barberId, // Set to the selected barber
      date, // The date and time of the appointment
      service, // The selected service
    });
    await appointment.save();
    res.status(201).json({ message: "Appointment booked", appointment });
  } catch (error) {
    res.status(500).json({ message: "Error booking appointment", error });
  }
};

// Get barber's schedule (for barbers)
const getBarberSchedule = async (req, res) => {
  try {
    const appointments = await Appointment.find({
      barber: req.user._id,
    }).populate("user", "name");

    // Return the barber's schedule
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching schedule", error });
  }
};
module.exports = { bookAppointment, getBarberSchedule };
