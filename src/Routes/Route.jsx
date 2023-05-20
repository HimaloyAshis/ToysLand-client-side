import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Register/SignUp";
import AddToys from "../Pages/AddToys/AddToys";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../Pages/MyToys/MyToys";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:'',
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/signUp",
                element:<SignUp></SignUp>
            },
            {
                path:'addToys',
                element:<PrivateRoute><AddToys></AddToys></PrivateRoute>
            },
            {
                path:'myToys',
                element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
            }
        ]
    }
])

export default router;