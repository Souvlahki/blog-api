import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useLayoutEffect } from "react";

function Homepage() {
  // const location = useLocation();
  // const navigate = useNavigate();
  // const user = location.state?.user;

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, [user, navigate]);

  return (
    <>
      <h1>Welcome back </h1>
    </>
  );
}

export default Homepage;
