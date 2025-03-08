import { useState } from "react";
import { useAuth } from "../contexts/authContext";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api/requests";
import "../styles/Login.css";
// import verifyToken from "../api/auth";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const auth = useAuth();

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
    localStorage.setItem("token", token);

    // const user = verifyToken();

    // auth.login(user);
    setSuccessMsg("Logged in successfully redirecting to homepage");
    setErrMsg("");
    setTimeout(() => {
      navigate("/homepage");
    }, 1000);
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {errMsg ? <div className="error-msg"></div> : null}
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="username" className="input-label">
          Username
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleInputChange}
            value={formData.username}
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
            onChange={handleInputChange}
            value={formData.password}
            required
            className="input-field"
          />
        </label>
        <br />
        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>

      {successMsg && <div className="success-msg">{successMsg}</div>}

      <div className="signup-link">
        Don't have an account? <Link to="/sign-up">Sign up!</Link>
      </div>
    </div>
  );
}

export default Login;
