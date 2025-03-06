import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/homepage");
      } else {
        const result = await response.json();
        console.log(result);
      }
    } catch (error) {
      console.error("Error during submission:", error);
    }
  };

  return (
    <form action="/login" method="post" onSubmit={handleOnSubmit}>
      <label htmlFor="username">
        username
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleInputChange}
          value={formData.username}
          required
        />
      </label>
      <label htmlFor="password">
        password
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleInputChange}
          value={formData.password}
          required
        />
      </label>
      <button>login</button>
    </form>
  );
}

export default Login;
