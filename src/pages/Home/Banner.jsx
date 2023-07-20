import img2 from "../../assets/images/img11.jpg";
import img3 from "../../assets/images/img12.jpg";
import img4 from "../../assets/images/img13.jpg";
import img5 from "../../assets/images/img14.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../index.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img2} />
          <div className="p-4 hidden md:block md:p-8 lg:p-10 md:w-[600px] text-white rounded absolute text-black top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-left">
            <h2 className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl">
              Develop your language skill now..
            </h2>
            <p className="my-3 sm:my-4 md:my-5 lg:my-6">
              Get access to compact lessons from the experts and connect with a
              community of native speakers to help you master words faster.
            </p>
            <button className="btn">Read More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
          <div className="p-4 hidden md:block md:p-8 lg:p-10 md:w-[600px] text-white rounded absolute text-black top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-left">
            <h2 className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl">
              Develop your language skill now..
            </h2>
            <p className="my-3 sm:my-4 md:my-5 lg:my-6">
              Get access to compact lessons from the experts and connect with a
              community of native speakers to help you master words faster.
            </p>
            <button className="btn">Read More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
          <div className="p-4 hidden md:block md:p-8 lg:p-10 md:w-[600px] text-white rounded absolute text-black top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-left">
            <h2 className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl">
              Develop your language skill now..
            </h2>
            <p className="my-3 sm:my-4 md:my-5 lg:my-6">
              Get access to compact lessons from the experts and connect with a
              community of native speakers to help you master words faster.
            </p>
            <button className="btn">Read More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} />
          <div className="p-4 hidden md:block md:p-8 lg:p-10 md:w-[600px] text-white rounded absolute text-black top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-left">
            <h2 className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl">
              Develop your language skill now..
            </h2>
            <p className="my-3 sm:my-4 md:my-5 lg:my-6">
              Get access to compact lessons from the experts and connect with a
              community of native speakers to help you master words faster.
            </p>
            <button className="btn">Read More</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
