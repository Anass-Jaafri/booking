import React, { useState } from "react";
import appointmentService from "../services/appointmentService";

const BookAppointment = () => {
  const [date, setDate] = useState("");
  const [service, setService] = useState("");
  const [barberId, setBarberId] = useState("");
  const [message, setMessage] = useState("");

  const handleBookAppointment = async (e) => {
    e.preventDefault();

    try {
      await appointmentService.bookAppointment({
        date,
        service,
        barberId,
      });

      setMessage("Appointment booked successfully!");
    } catch (error) {
      setMessage(error.response?.data?.message || "Error booking appointment");
    }
  };

  return (
    <div>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleBookAppointment}>
        <input
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="text"
          value={service}
          onChange={(e) => setService(e.target.value)}
          placeholder="Service"
          required
        />
        <input
          type="text"
          value={barberId}
          onChange={(e) => setBarberId(e.target.value)}
          placeholder="Barber ID"
          required
        />
        <button type="submit">Book</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BookAppointment;
