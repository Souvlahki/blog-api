import { useEffect, useState, useContext, createContext } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);

        // logs out the user when the token expires
        const expirationTime = decoded.exp * 1000 - Date.now();
        const timeout = setTimeout(() => {
          logout();
        }, expirationTime);

        return () => clearTimeout(timeout);
      } catch {
        logout();
      }
    }
  }, [token]);

  const login = (jwt) => {
    localStorage.setItem("token", jwt);
    setToken(jwt);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
