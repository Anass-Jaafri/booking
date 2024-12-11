import React, { useState, useEffect } from "react";
import appointmentService from "../services/appointmentService";

const BarberSchedule = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    appointmentService.getBarberSchedule().then(setAppointments);
  }, []);

  return (
    <div>
      <h2>Your Schedule</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment._id}>
            {appointment.date}: {appointment.user.name} - {appointment.service}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BarberSchedule;
