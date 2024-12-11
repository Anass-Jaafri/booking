const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  barber: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Barber",
    required: true,
  },
  date: { type: Date, required: true },
  phone: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
