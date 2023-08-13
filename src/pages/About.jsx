import PagesBanner from "../Components/PagesBanner";
import AboutUs from "./AboutUs";
import ExperienceCounter from "./ExperienceCounter";
import Subscribe from "./Subscribe";

const About = () => {
  return (
    <div className="pt-14 md:pt-40">
      <PagesBanner
        img="https://i.ibb.co/2SXWwVN/istockphoto-1480024970-612x612-removebg-preview.png"
        title="About Us"
      ></PagesBanner>
      <div className="max-container">
        <AboutUs></AboutUs>
        <ExperienceCounter></ExperienceCounter>
        <Subscribe></Subscribe>
      </div>
    </div>
  );
};

export default About;
