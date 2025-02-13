import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboardstyles.css";
const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/signup")}>Sign Up</button>
    </div>
  );
}

export default Dashboard;
