import SignUp from "./pages/SignUp";
import Homepage from "./pages/Homepage";
import Login from "./pages/login";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./pages/LandingPage";

const routes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/homepage",
    element: (
      <ProtectedRoute>
        <Homepage></Homepage>
      </ProtectedRoute>
    ),
  },
];

export default routes;
