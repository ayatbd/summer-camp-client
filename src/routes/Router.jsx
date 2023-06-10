import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home";
import Navbar from './../pages/Shared/Navbar';
import Footer from './../pages/Shared/Footer';
import Login from "../pages/Login";
import Register from './../pages/Register';
import Dashboard from "../layouts/Dashboard/Dashboard";
import SelectedClass from "../pages/Dashboard/SelectedClass";
import EnrolledClass from "../pages/Dashboard/EnrolledClass";
import AddClass from "../pages/Dashboard/AddClass";
import MyClass from "../pages/Dashboard/MyClass";
import Classes from "../pages/Classes";
import Instructors from "../pages/Instructors";
import ManageClass from "../pages/Dashboard/ManageClass";
import ManageUser from "../pages/Dashboard/ManageUser";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "navbar",
            element: <Navbar></Navbar>,
        },
        {
            path: "footer",
            element: <Footer></Footer>,
        },
        {
            path: "login",
            element: <Login></Login>,
        },
        {
            path: "register",
            element: <Register></Register>,
        },
        {
            path: "classes",
            element: <Classes></Classes>
        },
        {
            path: "instructors",
            element: <Instructors></Instructors>
        },
      ]
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "selectedclass",
                element: <SelectedClass></SelectedClass>
            },
            {
                path: "enrolledclass",
                element: <EnrolledClass></EnrolledClass>
            },
            {
                path: "addclass",
                element: <AddClass></AddClass>
            },
            {
                path: "myclass",
                element: <MyClass></MyClass>
            },
            {
                path: "manageclass",
                element: <ManageClass></ManageClass>
            },
            {
                path: "manageuser",
                element: <ManageUser></ManageUser>
            },
        ]
    }
  ]);