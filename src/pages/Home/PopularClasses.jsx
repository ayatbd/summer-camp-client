import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "./Home";

const PopularClasses = () => {
  const [popular, setPopular] = useState([]);
  const isDarkMode = useContext(ThemeContext);

  useEffect(() => {
    fetch("http://localhost:5000/class")
      .then((response) => response.json())
      .then((data) => setPopular(data));
  }, []);

  const sortedCards = popular
    .sort((a, b) => b.availableSeats - a.availableSeats)
    .slice(0, 6);

  return (
    <div className="bg-slate-400 p-24">
      <div className="text-center">
        <div className="flex justify-center w-full border-opacity-50">
          <div className="divider w-96"></div>
        </div>
        <h3
          className={`text-bold text-4xl ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Popular Classes
        </h3>
        <div className="flex justify-center w-full border-opacity-50">
          <div className="divider w-96"></div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-14">
        {sortedCards.map((p) => (
          <div
            key={p._id}
            className={`border-2 rounded ${
              p.availableSeats === 0
                ? "bg-red-200"
                : isDarkMode
                ? "bg-gray-900 text-white"
                : "bg-white"
            }`}
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-40 object-cover"
            />
            <div
              className={`p-3 ${isDarkMode ? "bg-gray-900" : "bg-teal-200"}`}
            >
              <h3
                className={`text-lg font-bold ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                {p.className}
              </h3>
              <p
                className={`text-gray-500 ${isDarkMode ? "text-gray-300" : ""}`}
              >
                Instructor: {p.instructorName}
              </p>
              <p
                className={`text-gray-500 ${isDarkMode ? "text-gray-300" : ""}`}
              >
                Available Seats: {p.availableSeats}
              </p>
              <p
                className={`text-gray-500 ${isDarkMode ? "text-gray-300" : ""}`}
              >
                Price: ${p.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
