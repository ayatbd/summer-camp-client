import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../ThemeProviders";
import Tittle from "../../Components/Tittle";
import { ScaleLoader } from "react-spinners";

const PopularInstructors = () => {
  const [popular, setPopular] = useState([]);
  const isDarkMode = useContext(ThemeContext);
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
    return (
      <div className="flex justify-center h-[100vh] items-center">
        <div>
          {loading ? (
            <ScaleLoader size={35} color="#123abc" loading={true} />
          ) : (
            <div>Content to display when not loading...</div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-[#f5f6f9]">
      <Tittle subTitle="Best Tutor" title="See Top Instructors"></Tittle>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="my-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
      >
        {popular.map((p) => (
          <div
            key={p._id}
            className="p-1 border hover:-translate-y-3 transition duration-500 ease-in-out border-gray-300 bg-teal-200 rounded"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-60 object-cover mb-4"
            />
            <div className="space-y-2 p-5">
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
