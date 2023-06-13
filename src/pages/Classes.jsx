import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const Classes = () => {
  const [classData, setClassData] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/class")
      .then((response) => response.json())
      .then((data) => setClassData(data));
  }, []);

  const handleSelectClass = (classId) => {
    console.log(classId);
    if (!user) {
      Swal.fire("Please login before selecting the class");
    } else {
      const selectedClass = classData.find((cls) => cls.id === classId);

      fetch("http://localhost:5000/selected-class", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedClass),
      })
        .then((response) => response.json())
        .then((data) => {
          
          console.log("Server response:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const isLoggedIn = Boolean(user);

  return (
    <div className="my-20">
      <h2 className="text-2xl font-bold mb-4">Classes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {classData.map((cls) => (
          <div
            key={cls.id}
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
                onClick={() => handleSelectClass(cls.id)}
                disabled={cls.availableSeats === 0 || isLoggedIn}
                className={`btn btn-accent ${
                  cls.availableSeats === 0 || isLoggedIn
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
