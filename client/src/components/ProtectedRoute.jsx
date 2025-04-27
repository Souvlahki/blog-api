import { useAuth } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/landing-page", { replace: true });
    }
  }, [token, navigate]);

  return children;
}

export default ProtectedRoute;
