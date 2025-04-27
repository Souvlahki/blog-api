import Header from "./components/Header";
import "./styles/App.css";
import { useAuth } from "./contexts/AuthProvider";
import { Outlet } from "react-router-dom";

function App() {
  const { token } = useAuth();
  return (
    <div className="app-container">
      <Header />
      <hr></hr>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
