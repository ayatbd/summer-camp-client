import { useContext } from "react";
import img1 from "../../assets/images/img11.jpg";
import img3 from "../../assets/images/img12.jpg";
import img4 from "../../assets/images/img13.jpg";
import img5 from "../../assets/images/img14.jpg";
import { ThemeContext } from "../../ThemeProviders";

const Slider = () => {
  const isDarkMode = useContext(ThemeContext);
  return (
    <div className="hidden md:block">
      <div className="carousel max-h-[90vh] w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img4} className="w-full" alt="Slide 1" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide4"
              className={`btn btn-circle ${
                isDarkMode ? "text-white bg-gray-800" : ""
              }`}
            >
              ❮
            </a>
            <a
              href="#slide2"
              className={`btn btn-circle ${
                isDarkMode ? "text-white bg-gray-800" : ""
              }`}
            >
              ❯
            </a>
          </div>
          <div className="p-4 hidden md:block md:p-8 lg:p-10 md:w-[600px] text-white rounded absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-left">
            <h2 className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl">
              Develop your language skill now..
            </h2>
            <p className="my-3 sm:my-4 md:my-5 lg:my-6">
              Get access to compact lessons from the experts and connect with a
              community of native speakers to help you master words faster.
            </p>
            <button className="btn">Read More</button>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img3} className="w-full" alt="Slide 2" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="bg-teal-500 p-4 md:p-8 lg:p-10 rounded absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl">
              Learn from the base..
            </h2>
            <p className="my-3 sm:my-4 md:my-5 lg:my-6">
              Get access to compact lessons from the experts and connect with a
              community of native speakers to help you master words faster.
            </p>
            <button className="btn">Read More</button>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img1} className="w-full" alt="Slide 3" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="bg-teal-500 p-4 md:p-8 lg:p-10 rounded absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl">
              Skill boost up...
            </h2>
            <p className="my-3 sm:my-4 md:my-5 lg:my-6">
              Get access to compact lessons from the experts and connect with a
              community of native speakers to help you master words faster.
            </p>
            <button className="btn">Read More</button>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img5} className="w-full" alt="Slide 4" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="bg-teal-500 p-4 md:p-8 lg:p-10 rounded absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl">
              Here is a simple heading text.
            </h2>
            <p className="my-3 sm:my-4 md:my-5 lg:my-6">
              Get access to compact lessons from the experts and connect with a
              community of native speakers to help you master words faster.
            </p>
            <button className="btn">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
