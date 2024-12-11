import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/homePage";
import ClientDashboard from "./pages/clientDashboard";
import BarberDashboard from "./pages/barberDashboard";
import Navbar from "./components/navbar";
import BookAppointment from "./components/bookAppointment";
import BarberSchedule from "./components/barberSchedule";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };
  return (
    <BrowserRouter>
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register/:role" element={<RegisterForm />} />
        <Route path="/client-dashboard" element={<ClientDashboard />} />
        <Route path="/barber-dashboard" element={<BarberDashboard />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/barber-schedule" element={<BarberSchedule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
