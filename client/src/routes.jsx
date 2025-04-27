import SignUp from "./pages/SignUp";
import Homepage from "./pages/Homepage";
import Login from "./pages/login";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./pages/LandingPage";
import App from "./App";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Homepage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/landing-page",
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
];

export default routes;
