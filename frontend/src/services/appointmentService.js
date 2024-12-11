import axios from "axios";

const API_URL = "/api/appointments";

const bookAppointment = async (appointmentData) => {
  const response = await axios.post(`${API_URL}/book`, appointmentData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

const getBarberSchedule = async () => {
  const response = await axios.get(`${API_URL}/schedule`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

const appointmentService = {
  bookAppointment,
  getBarberSchedule,
};

export default appointmentService;
