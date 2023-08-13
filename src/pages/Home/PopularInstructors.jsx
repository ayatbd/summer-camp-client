import { useEffect, useState } from "react";
import Tittle from "../../Components/Tittle";
import Loader from "../Shared/Loader";
import useTheme from "../../hooks/useTheme";

const PopularInstructors = () => {
  const [popular, setPopular] = useState([]);
  const { isDarkMode } = useTheme();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://summer-camp-server-ten-delta.vercel.app/class")
      .then((response) => response.json())
      .then((data) => {
        setPopular(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={`py-12 bg-[#f5f6f9] ${isDarkMode && "bg-gray-900"}`}>
      <Tittle subTitle="Best Tutor" title="See Top Instructors"></Tittle>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="my-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
      >
        {popular.map((p) => (
          <div
            key={p._id}
            className={`p-1 border hover:-translate-y-3 transition duration-500 ease-in-out border-gray-300 rounded ${
              isDarkMode ? "bg-gray-900" : "bg-teal-200"
            }`}
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-60 object-cover mb-4"
            />
            <div className={`space-y-2 p-5 ${isDarkMode && "text-white"}`}>
              <h3 className="text-lg font-bold">{p.instructorName}</h3>
              <p className="">
                <strong>Instructor:</strong> {p.email}
              </p>
              <p className="">
                <strong>Instructor of:</strong> {p.className}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
