import { createBrowserRouter } from "react-router-dom";
import App from './App';

import Login from './pages/Login'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/login",
    element: <Login/>
  },
]);

export default router