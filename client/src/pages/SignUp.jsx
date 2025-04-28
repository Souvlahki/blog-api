import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInUser } from "../api/requests";
import "../styles/SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState([]);
  const [successMsg, setSuccessMsg] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await signInUser(formData);

    if (response.errors) {
      setErrors(response.errors);
      return;
    }

    setSuccessMsg("signed in succsessfully redirecting to the login page...");
    setErrors([]);
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const getFieldErrors = (field) =>
    errors.filter((error) => error.path === field);

  return (
    <div className="signup-container">
      <h1 className="signup-heading">Sign Up</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <label htmlFor="username" className="input-label">
          Username
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
            placeholder="8-20 characters (e.g. Souvlahki)"
            className="input-field"
          />
        </label>
        {getFieldErrors("username").map((error) => (
          <div key={error.msg} className="error-msg">
            {error.msg}
          </div>
        ))}
        <label htmlFor="password" className="input-label">
          Password
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            placeholder="10-20 characters"
            className="input-field"
          />
        </label>
        {getFieldErrors("password").map((error) => (
          <div key={error.msg} className="error-msg">
            {error.msg}
          </div>
        ))}
        <button type="submit" className="submit-btn">
          Sign Up
        </button>
      </form>
      {successMsg && <div className="success-msg">{successMsg}</div>}
      <div className="login-link">
        Already have an account?{" "}
        <Link to="/login" className="login-link-anchor">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
