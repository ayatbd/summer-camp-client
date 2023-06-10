import img1 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpeg";

const Slider = () => {
  return (
    <div className="carousel h-[28rem] w-full my-20">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img4} className="w-full" alt="Slide 1" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute text-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="font-bold text-3xl">Here is simple heading text.</h2>
          <p className="my-5">Some text describing slide 1</p>
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="font-bold text-3xl">Here is simple heading text.</h2>
          <p className="my-5">Some text describing slide 2</p>
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="font-bold text-3xl">Here is simple heading text.</h2>
          <p className="my-5">Some text describing slide 3</p>
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="font-bold text-3xl">Here is simple heading text.</h2>
          <p className="my-5">Some text describing slide 4</p>
          <button className="btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
