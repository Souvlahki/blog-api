import jwt from "jsonwebtoken";

const verifyToken = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  const decoded = jwt.decode(token);
  const exp = decoded.exp;
  const currentTime = Math.floor(Date.now() / 1000);

  if (exp < currentTime) {
    return null;
  }

  return decoded.username;
};

export default verifyToken;