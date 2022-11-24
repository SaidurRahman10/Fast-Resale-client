import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import BrandCarShow from "../../Pages/AllCategories/BrandCarShow";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {path:'/', element:<Main></Main>,children:[
        {path:'/', element:<Home></Home>,loader:()=> fetch('http://localhost:5000/allCars')},
        {path:'/signup', element:<SignUp></SignUp>},
        {path:'/login',element:<Login></Login>},
        {path:'/blog',element:<Blog></Blog>},
        {path:'/:id',element:<PrivateRoute><BrandCarShow></BrandCarShow></PrivateRoute>,loader:({params})=> fetch(`http://localhost:5000/allCars/${params.id}`)}
        
    ]}
])