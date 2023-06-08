import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home";
import Navbar from './../pages/Shared/Navbar';
import Footer from './../pages/Shared/Footer';


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
      ]
    },
  ]);