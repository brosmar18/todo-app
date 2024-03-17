import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Account, Calendar, Home, Tasks, Settings, Login } from "./pages";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const ProtectedLayout = () => {
    return (
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  };

  // Define a route structure that incorporates authentication checks
  const router = createBrowserRouter([
    {
      path: "/",
      element: isLoggedIn ? (
        <ProtectedLayout />
      ) : (
        <Navigate to="/login" replace />
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "tasks", element: <Tasks /> },
        { path: "settings", element: <Settings /> },
        { path: "calendar", element: <Calendar /> },
        { path: "account", element: <Account /> },
      ],
    },
    {
      path: "/login",
      element: isLoggedIn ? <Navigate to="/" replace /> : <Login />,
    },
    // Redirects to login if any undefined route is accessed
    { path: "*", element: <Navigate to="/login" replace /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
