import { useNavigate } from "react-router-dom";
import { useEffect, useState, useLayoutEffect } from "react";

function Homepage() {
  const navigate = useNavigate();
  
  return (
    <>
      <h1>Welcome back </h1>
    </>
  );
}

export default Homepage;
