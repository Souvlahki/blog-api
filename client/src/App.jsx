import LandingPage from "./pages/LandingPage";
import AuthProvider from "./contexts/AuthProvider";
import { useAuth } from "./contexts/authContext";
import Homepage from "./pages/Homepage";

function App() {
  const auth = useAuth();
  return (
    <AuthProvider>
      <LandingPage></LandingPage>
    </AuthProvider>
  );
}

export default App;
