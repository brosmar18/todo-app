import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Account, Calendar, Home, TasksPage, Settings, Auth } from "./pages";
import Navbar from "./Components/Navbar";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import Sidebar from "./Components/Sidebar";

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const ProtectedLayout = () => {
    return (
      <div className="bg-gray-100">
        <Navbar />
        <main className="flex">
          <Sidebar />
          <Outlet />
        </main>
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
        { path: "tasks", element: <TasksPage /> },
        { path: "settings", element: <Settings /> },
        { path: "calendar", element: <Calendar /> },
        { path: "account", element: <Account /> },
      ],
    },
    {
      path: "/login",
      element: isLoggedIn ? <Navigate to="/" replace /> : <Auth />,
    },
    // Redirects to login if any undefined route is accessed
    { path: "*", element: <Navigate to="/login" replace /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
