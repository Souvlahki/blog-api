import SignUp from "./pages/SignUp";
import Homepage from "./pages/Homepage";
import Login from "./pages/login";
import App from "./App";
const routes = [
  {
    path: "/",
    element: <App />,
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
    element: <Homepage />,
  },
];

export default routes;
