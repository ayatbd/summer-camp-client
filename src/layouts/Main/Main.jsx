import { Outlet } from "react-router-dom";
import Footer from "../../pages/Shared/Footer";
import Navbar from "../../pages/Shared/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
