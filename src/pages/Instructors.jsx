import { useEffect, useState } from "react";


const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/class")
      .then((response) => response.json())
      .then((data) => setInstructors(data));
  }, []);
    return (
        <div className="my-20">
          <h2 className="text-2xl font-bold mb-4">Instructors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {instructors.map((instructor) => (
              <div
                key={instructor.id}
                className='p-4  border border-gray-300 rounded bg-red-200'
              >
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-40 object-cover mb-4"
                />
                <h3 className="text-lg font-bold">{instructor.instructorName}</h3>
                <p className="text-gray-500">Instructor: {instructor.instructorEmail}</p>
              </div>
            ))}
          </div>
        </div>
    );
};

export default Instructors;