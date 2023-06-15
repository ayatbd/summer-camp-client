import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const Classes = () => {
  const [classData, setClassData] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const { user } = useAuth();
  console.log(user);

  useEffect(() => {
    fetch("http://localhost:5000/class")
      .then((response) => response.json())
      .then((data) => setClassData(data));
  }, []);

  const handleSelectClass = (id) => {
    const selectedClass = classData.find((cls) => cls._id === id);
    fetch("http://localhost:5000/select/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: user.id, classId: selectedClass._id }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.selected) {
          return;
        }
        setSelectedCards([...selectedCards, selectedClass._id]);
        fetch("http://localhost:5000/select", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(selectedClass),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // const handleSelectClass = (id) => {
  //   const selectedClass = classData.find((cls) => cls._id === id);
  //   fetch("http://localhost:5000/select", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(selectedClass),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

  return (
    <div className="my-20">
      <h2 className="text-2xl font-bold mb-4">Classes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {classData.map((cls) => (
          <div
            key={cls._id}
            className={`p-1 border border-gray-300 rounded ${
              cls.availableSeats === 0 ? "bg-red-500" : "bg-white"
            }`}
          >
            <img
              src={cls.image}
              alt={cls.name}
              className="w-full h-40 object-cover"
            />
            <div className="bg-teal-200 p-1 mt-1">
              <h3 className="text-lg font-bold">{cls.className}</h3>
              <p className="text-gray-500">Instructor: {cls.instructorName}</p>
              <p className="text-gray-500">
                Available Seats: {cls.availableSeats}
              </p>
              <p className="text-gray-500">Price: ${cls.price}</p>
              <button
                onClick={() => handleSelectClass(cls._id)}
                disabled={
                  selectedCards.includes(cls._id) ||
                  cls.availableSeats === 0 ||
                  selectedCards.includes(cls._id)
                }
                className={`btn btn-accent ${
                  selectedCards.includes(cls._id) ||
                  cls.availableSeats === 0 ||
                  selectedCards.includes(cls._id)
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
