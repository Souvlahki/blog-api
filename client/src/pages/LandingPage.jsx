import React from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1>Happening then</h1>
      <h2>join today</h2>
      <Link to="/sign-up">Create an account</Link>
      <h3>Already a member?</h3>
      <Link to="/login">Login!</Link>
    </div>
  );
};  

export default LandingPage;
