import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Register/SignUp";

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
            }
        ]
    }
])

export default router;