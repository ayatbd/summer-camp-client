import { useEffect } from "react";
import Tittle from "../../Components/Tittle";
import img1 from "../../assets/images/img15.jpg";
import img2 from "../../assets/images/img16.jpeg";
import img3 from "../../assets/images/img17.jpeg";
import "aos/dist/aos.css";
import AOS from "aos";

const StudentFeedback = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mb-28">
      <Tittle subTitle="Best Selling" title="Popular Classes"></Tittle>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="grid md:grid-cols-3 gap-9 mt-10"
      >
        <div
          style={{ borderRadius: "100px 0px 100px 0px" }}
          className="p-5 space-y-3 flex justify-center flex-col items-center border-[1px] border-gray-500/100"
        >
          <img
            style={{ borderRadius: "0 200px 200px 200px" }}
            className="w-[100px] h-[100px]"
            src={img1}
            alt=""
          />
          <div className="text-center flex flex-col gap-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum eu ligula in urna aliquam volutpat.
            </p>
            <h5 className="text-blue-600 font-bold text-xl">Josef</h5>
          </div>
        </div>
        <div
          style={{ borderRadius: "100px 0px 100px 0px" }}
          className="p-5 space-y-3 flex justify-center flex-col items-center rounded-se-3xl rounded-es-3xl border-[1px] border-gray-500/100"
        >
          <img
            style={{ borderRadius: "0 200px 200px 200px" }}
            className="w-[100px] h-[100px] rounded-se-3xl rounded-es-3xl"
            src={img2}
            alt=""
          />
          <div className="text-center flex flex-col gap-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum eu ligula in urna aliquam volutpat.
            </p>
            <h5 className="text-blue-600 font-bold text-xl">Sarah</h5>
          </div>
        </div>
        <div
          style={{ borderRadius: "100px 0px 100px 0px" }}
          className="p-5 space-y-3 flex justify-center flex-col items-center rounded-se-3xl rounded-es-3xl border-[1px] border-gray-500/100"
        >
          <img
            style={{ borderRadius: "0 200px 200px 200px" }}
            className="w-[100px] h-[100px] rounded-se-3xl rounded-es-3xl"
            src={img3}
            alt=""
          />
          <div className="text-center flex flex-col gap-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum eu ligula in urna aliquam volutpat.
            </p>
            <h5 className="text-blue-600 font-bold text-xl">Josef</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentFeedback;
