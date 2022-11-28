import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { myContext } from "../Context/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import Header from "../Pages/Shered/Header/Header";
import bannerProduct from "../img/addProduct.png";
import useSeller from "../Hooks/useSeller";

const DashboardLayout = () => {
  const { user } = useContext(myContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);

  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile bg-slate-100">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div
          style={{ backgroundImage: `url(${bannerProduct})` }}
          className="drawer-content flex hero-overlay "
        >
          <div className="hero-overlay ">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Orders</Link>
            </li>
            {(isSeller || isAdmin) && (
              <>
                <li>
                  <Link to="/dashboard/addproduct">Add Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/myproduct">My Product</Link>
                </li>
              </>
            )}

            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allusers">All Users</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
