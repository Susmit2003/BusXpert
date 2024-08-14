import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Error from "../component/Error";
import Layout from "../Pages/Layout";
import Home from "../Pages/User/Home.js";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Login/>,
        errorElement:<Error/> 
    },
    {
        path:"/signup",
        element: <Signup/>,
        errorElement:<Error/> 
    },
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/user",
                element: <Home/>
            },
            {
                path: "/busAdmin",
                element: <Home/>
            },
        ],
        errorElement:<Error/> 
    }
])