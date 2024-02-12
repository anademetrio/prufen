import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from './pages/Login'
import Register from "./pages/Register";
import Products from "./pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/products",
    element: <Products/>
  },
]);

export default router