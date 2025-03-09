import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthProvider";

function LandingPage() {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/homepage");
    }
  }, [token, navigate]);

  return (
    !token && (
      <div className="landing-container">
        <h1>Happening then</h1>
        <h2>Join today</h2>
        <Link to="/sign-up" className="create-account-btn">
          Create an account
        </Link>
        <h3>Already a member?</h3>
        <Link to="/login" className="login-link">
          Login!
        </Link>
      </div>
    )
  );
}

export default LandingPage;
