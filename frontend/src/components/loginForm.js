import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

const LoginForm = ({ setRole }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { role } = await authService.login(email, password);
    setRole(role);
    if (role === "barber") {
      navigate("/barber-dashboard");
    } else {
      navigate("/client-dashboard");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
