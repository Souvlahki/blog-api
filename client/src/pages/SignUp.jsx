import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInUser } from "../api/requests";
import ErrorMsg from "../components/ErrorMsg";
import SuccessMsg from "../components/SuccessMsg";
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
      console.log(response.errors);
      return;
    }

    setSuccessMsg("signed in succsessfully redirecting to the login page...");
    setErrors([]);
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      {errors.length > 0 && (
        <div className="error-msg">
          {errors.map((err) => (
            <ErrorMsg key={err.msg}>{err.msg}</ErrorMsg>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" className="input-label">
          Username
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
            className="input-field"
          />
        </label>
        <br />
        <label htmlFor="password" className="input-label">
          Password
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            className="input-field"
          />
        </label>
        <br />
        <button type="submit" className="submit-btn">
          Sign Up
        </button>
      </form>

      <div className="login-link">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default SignUp;
