import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import authService from "../services/authService";
import "../assets/css/registerForm.css"; // Ensure the styles are imported

const RegisterForm = () => {
  const { role } = useParams(); // Get role from URL params (client or barber)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(role);
    // Validate role
    if (role !== "client" && role !== "barber") {
      navigate("/"); // Redirect to home if invalid role
    }
  }, [role, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.register(name, email, password, role);
      navigate("/login"); // Redirect to login after successful registration
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2 className="form-title">
          {role === "barber" ? "Register as Barber" : "Register as Client"}
        </h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          className="form-input"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="form-input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="form-input"
        />
        <button type="submit" className="form-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
