import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import BrandCarShow from "../../Pages/AllCategories/BrandCarShow";
import AddProduct from "../../Pages/AllCategories/Dashboard/AddProduct/AddProduct";
import AllUsers from "../../Pages/AllCategories/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/AllCategories/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/AllCategories/Dashboard/MyOrders/MyOrders";
import MyProduct from "../../Pages/AllCategories/Dashboard/MyProduct/MyProduct";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/allCars"),
      },
      { path: "/signup", element: <SignUp></SignUp> },
      { path: "/login", element: <Login></Login> },
      { path: "/blog", element: <Blog></Blog> },
      {
        path: "allcar/:id",
        element: (
          <PrivateRoute>
            <BrandCarShow></BrandCarShow>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allCars/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/myproduct",
        element: <MyProduct></MyProduct>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
