import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {path:'/', element:<Main></Main>,children:[
        {path:'/', element:<Home></Home>},
        {path:'/signup', element:<SignUp></SignUp>},
        {path:'/login',element:<Login></Login>}
        
    ]}
])