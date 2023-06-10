import { FaBook, FaHome, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../pages/Shared/Navbar";
import Footer from "../../pages/Shared/Footer";

const Dashboard = () => {
  const isAdmin = false;
  const isStudent = false;
  const isInstructor = true;

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {isStudent && (
              <>
                <li>
                  <NavLink to="/dashboard/selectedclass">
                    <FaHome></FaHome> My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/enrolledclass">
                    {" "}
                    <FaUtensils></FaUtensils> My Enrolled Classes
                  </NavLink>
                </li>
              </>
            )}
            {isInstructor && (
              <>
                <li>
                  <NavLink to="/dashboard/addclass">
                    <FaHome></FaHome> Add a Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myclass">
                    <FaHome></FaHome> My Classes
                  </NavLink>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li>
                  <NavLink to="/dashboard/manageclass">
                    <FaHome></FaHome> Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageuser">
                    <FaBook></FaBook> Manage Users
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
