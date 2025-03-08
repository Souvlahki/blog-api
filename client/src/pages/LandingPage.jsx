import React from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";

function LandingPage() {
  return (
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
  );
}

export default LandingPage;
