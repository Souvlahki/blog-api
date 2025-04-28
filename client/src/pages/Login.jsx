import { useState } from "react";
import { useAuth } from "../contexts/AuthProvider";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api/requests";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const { login } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const response = await loginUser(formData);
    if (response.error) {
      setErrMsg(response.error);
      return;
    }

    const token = response.token;
    login(token);
    setSuccessMsg("Logged in successfully redirecting to homepage");
    setErrMsg("");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <form onSubmit={handleOnSubmit} className="login-form">
        {errMsg && <div className="error-msg">{errMsg}</div>}
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
        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>
      {successMsg && <div className="success-msg">{successMsg}</div>}
      <div className="signup-link">
        Don't have an account?{" "}
        <Link to="/sign-up" className="signup-link-anchor">
          Sign up!
        </Link>
      </div>
    </div>
  );
}

export default Login;
