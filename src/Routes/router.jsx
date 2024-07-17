import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddBooks from "../Pages/AddBooks/AddBooks";
import PrivateRoutes from "./PrivateRoutes";
import AllBooks from "../Pages/AllBooks/AllBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <Register></Register>
      },
      {
        path: '/addBooks',
        element: <PrivateRoutes><AddBooks></AddBooks></PrivateRoutes>
      },
      {
        path: '/allBooks',
        element: <PrivateRoutes><AllBooks></AllBooks></PrivateRoutes>
      }
    ]
  },

]);

export default router;