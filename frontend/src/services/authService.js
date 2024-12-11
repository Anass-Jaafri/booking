import axios from "axios";

const API_URL = "/api/users";

const authService = {
  login: async (email, password) => {
    const { data } = await axios.post(`${API_URL}/login`, { email, password });
    localStorage.setItem("token", data.token);
    return data.user;
  },
  register: async (name, email, password, role) => {
    const { data } = await axios.post(`${API_URL}/register/${role}`, {
      name,
      email,
      password,
    });
    localStorage.setItem("token", data.token);
  },
};

export default authService;
