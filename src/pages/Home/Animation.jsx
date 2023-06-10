import { Fade, Slide } from "react-awesome-reveal";


const Animation = () => {
    return (
        <div className="text-center bg-emerald-300 py-28 my-20">
      <Slide>
        <h1 className="text-4xl font-bold mb-5">New language, new <br /> opportunities, new you</h1>
      </Slide>
      <Fade delay={1e3} cascade damping={1e-1}>
      Get access to compact lessons from the experts and connect
      with a community of native speakers to help you master words faster.
      </Fade>
    </div>
      );
};

export default Animation;