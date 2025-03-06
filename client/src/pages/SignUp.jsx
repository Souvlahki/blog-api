import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Sign-up successful!");
        setErrorMessage("");
        setTimeout(() => navigate("/login"), 1000);
      } else {
        const result = await response.json();
        console.log(result);
        setErrorMessage(result.error || "Something went wrong");
        setSuccessMessage("");
      }
    } catch (error) {
      console.error("Error during submission:", error);
      setErrorMessage("Network error. Please try again later.");
      setSuccessMessage("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>

      {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
      Already have an accout?<Link to="/login" >log in</Link>
    </div>
  );
};

export default SignUp;
