import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthProvider";
import Header from "../components/Header";
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
        <Header />
        <hr />
        <main>
          <h2>
            Write yours starting now on <span>Elven!</span>
          </h2>
          <Link to="/sign-up">join today</Link>
        </main>
      </div>
    )
  );
}

export default LandingPage;
