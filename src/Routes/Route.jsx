import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Register/SignUp";
import AddToys from "../Pages/AddToys/AddToys";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../Pages/MyToys/AllToys";
import ViewDetail from "../Pages/viewDetail/ViewDetail";

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
                path:'allToys',
                element:<PrivateRoute><AllToys></AllToys> </PrivateRoute>
            },
            {
                path:'/vieDetail/:id',
                element:<ViewDetail></ViewDetail>,
                loader:({params})=> fetch(`http://localhost:5000/viewToys/${params.id}`)
            }
        ]
    }
])

export default router;