import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import {
  Account,
  Calendar,
  Home,
  Tasks
} from './pages';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/tasks',
          element: <Tasks />,
        },
        {
          path: '/calendar',
          element: <Calendar />,
        },
        {
          path: '/account',
          element: <Account />,
        },
      ]
    }
  ]);


  return <RouterProvider router={router} />;
}

export default App;