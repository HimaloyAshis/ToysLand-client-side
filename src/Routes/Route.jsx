import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Register/SignUp";
import AddToys from "../Pages/AddToys/AddToys";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../Pages/MyToys/AllToys";
import ViewDetail from "../Pages/viewDetail/ViewDetail";
import MyToys from "../Pages/MyToy/MyToys";
import UpdateToys from "../Pages/UpdateToys/UpdateToys";
import HomeToyDetail from "../Pages/HomeToyDetail/HomeToyDetail";

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
            },
            {
                path:'myToys',
                element:<MyToys></MyToys>
            },
            {
                path:'/updateToy/:id',
                element:<UpdateToys></UpdateToys>,
                loader:({params})=>fetch(`http://localhost:5000/viewToys/${params.id}`)
            },
            {
                path:'/homeToyDetail/:id',
                element:<HomeToyDetail></HomeToyDetail>,
                loader:({params})=>fetch(`http://localhost:5000/Toys/${params.id}`)
            }
        ]
    }
])

export default router;