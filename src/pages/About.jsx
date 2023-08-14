import PagesBanner from "../Components/PagesBanner";
import AboutUs from "./AboutUs";
import ExperienceCounter from "./ExperienceCounter";
import Subscribe from "./Subscribe";

const About = () => {
  return (
    <div className="">
      <PagesBanner img="" title="About Us"></PagesBanner>
      <div className="max-container">
        <AboutUs></AboutUs>
        <ExperienceCounter></ExperienceCounter>
        <Subscribe></Subscribe>
      </div>
    </div>
  );
};

export default About;
