import Animation from "./Animation";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import Banner from "./Banner";
import StudentFeedback from "./StudentFeedback";

const Home = () => {
  return (
    <div>
      <Banner />
      <Animation />
      <PopularClasses />
      <PopularInstructors />
      <StudentFeedback />
    </div>
  );
};

export default Home;
