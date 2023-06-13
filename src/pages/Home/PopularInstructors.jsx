import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from './Home';

const PopularInstructors = () => {
  const [popular, setPopular] = useState([]);
  const isDarkMode = useContext(ThemeContext);

  useEffect(() => {
    fetch('http://localhost:5000/class')
      .then((response) => response.json())
      .then((data) => setPopular(data));
  }, []);

  return (
    <div className={`my-20 ${isDarkMode ? 'bg-gray-900' : ''}`}>
      <div className="text-center">
        <div className="flex justify-center w-full border-opacity-50">
          <div className="divider w-96"></div>
        </div>
        <h3 className={`text-bold text-4xl ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Popular Instructors
        </h3>
        <div className="flex justify-center w-full border-opacity-50">
          <div className="divider w-96"></div>
        </div>
      </div>
      <div className="my-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {popular.map((p) => (
          <div
            key={p._id}
            className={`p-4 border ${
              isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-red-200'
            } rounded`}
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : ''}`}>
              {p.instructorName}
            </h3>
            <p className={`text-gray-500 ${isDarkMode ? 'text-gray-300' : ''}`}>
              Instructor: {p.instructorEmail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
