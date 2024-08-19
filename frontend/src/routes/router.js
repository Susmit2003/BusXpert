import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Error from "../component/Error";
import Layout from "../Pages/Layout";
import Home from "../Pages/User/Home.js";
import BusDetails from "../Pages/User/BusDetails.js";

export const router = createBrowserRouter([
  {
    path: "/login", // changed from "/" to "/login"
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <Error />,
  },
  {
    path: "/", // main path for Layout
    element: <Layout />,
    children: [
      {
        path: "user",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "user/:Bus_id",
        element: <BusDetails />,
        errorElement: <Error />,
      },
      {
        path: "busAdmin", // relative path
        element: <Home />,
        errorElement: <Error />,
      },
    ],
    errorElement: <Error />,
  },
]);
