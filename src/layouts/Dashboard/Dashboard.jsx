import { FaChalkboardTeacher, FaLeanpub, FaUserFriends } from "react-icons/fa";
import { BiSelectMultiple } from "react-icons/bi";
import { SiGoogleclassroom } from "react-icons/si";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../pages/Shared/Navbar";
import Footer from "../../pages/Shared/Footer";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import useStudent from "../../hooks/useStudent";

const Dashboard = () => {
  const isAdmin = useAdmin();
  const isStudent = useStudent();
  const isInstructor = useInstructor();

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center mt-5">
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
                    <BiSelectMultiple></BiSelectMultiple> My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/enrolledclass">
                    {" "}
                    <SiGoogleclassroom></SiGoogleclassroom> My Enrolled Classes
                  </NavLink>
                </li>
              </>
            )}
            {isInstructor && (
              <>
                <li>
                  <NavLink to="/dashboard/addclass">
                    <FaLeanpub></FaLeanpub> Add a Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myclass">
                    <FaChalkboardTeacher></FaChalkboardTeacher> My Classes
                  </NavLink>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li>
                  <NavLink to="/dashboard/manageclass">
                    <FaChalkboardTeacher></FaChalkboardTeacher> Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageuser">
                    <FaUserFriends></FaUserFriends> Manage Users
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
