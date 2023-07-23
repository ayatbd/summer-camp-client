import { useEffect, useState } from "react";
import "../../index.css";
import Tittle from "../../Components/Tittle";
import Loader from "../Shared/Loader";

const PopularClasses = () => {
  const [popular, setPopular] = useState([]);
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

  const sortedCards = popular
    .sort((a, b) => b.availableSeats - a.availableSeats)
    .slice(0, 6);

  return (
    <div className="py-24 bg-[#f5f6f9]">
      <Tittle subTitle="Best Selling" title="Popular Classes"></Tittle>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="grid overflow-hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-14"
      >
        {sortedCards.map((p) => (
          <div
            key={p._id}
            className={`border-2 group overflow-hidden rounded-lg w-full custom-cls-2 ${
              p.availableSeats === 0 ? "bg-red-200" : "bg-white"
            }`}
          >
            <div className="overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="w-full object-cover group-hover:scale-125 transition duration-700 ease-in-out h-60"
              />
            </div>
            <div className="p-6 space-y-2 overflow-hidden bg-teal-200">
              <div className="mb-2 space-y-2">
                <h3 className="text-lg font-bold text-black">{p.className}</h3>
                <p className="text-black">
                  <strong>Instructor:</strong> {p.instructorName}
                </p>
                <p className="text-black">
                  <strong>Available Seats:</strong> {p.availableSeats}
                </p>
                <p className="text-black">
                  <strong>Price:</strong> ${p.price}
                </p>
              </div>
              <button className="invisible bg-blue-600 text-white py-2 px-8 hover:bg-blue-800 custom-cls-3 animate-bounce">
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
