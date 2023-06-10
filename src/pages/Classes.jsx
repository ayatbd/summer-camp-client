import { useState } from "react";


const Classes = () => {
    const classes = [
        {
          id: 1,
          image: 'class1.jpg',
          name: 'Class 1',
          instructor: 'John Doe',
          availableSeats: 5,
          price: 50,
        },
        {
          id: 2,
          image: 'class2.jpg',
          name: 'Class 2',
          instructor: 'Jane Smith',
          availableSeats: 0,
          price: 60,
        },
        // Add more class objects as needed
      ];
    
      const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with actual login check
      const handleSelectClass = (classId) => {
        if (!isLoggedIn) {
          alert('Please log in before selecting the course.');
        } else {
          // Handle class selection logic
          console.log('Selected class:', classId);
        }
      };
    return (
        <div className="my-20">
          <h2 className="text-2xl font-bold mb-4">Classes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {classes.map((cls) => (
              <div
                key={cls.id}
                className={`p-4 border border-gray-300 rounded ${
                  cls.availableSeats === 0 ? 'bg-red-200' : 'bg-white'
                }`}
              >
                <img
                  src={cls.image}
                  alt={cls.name}
                  className="w-full h-40 object-cover mb-4"
                />
                <h3 className="text-lg font-bold">{cls.name}</h3>
                <p className="text-gray-500">Instructor: {cls.instructor}</p>
                <p className="text-gray-500">Available Seats: {cls.availableSeats}</p>
                <p className="text-gray-500">Price: ${cls.price}</p>
                <button
                  onClick={() => handleSelectClass(cls.id)}
                  disabled={cls.availableSeats === 0 || isLoggedIn}
                  className={`mt-4 px-4 py-2 bg-gray-900 text-white rounded ${
                    cls.availableSeats === 0 || isLoggedIn ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  Select
                </button>
              </div>
            ))}
          </div>
        </div>
    );
};

export default Classes;