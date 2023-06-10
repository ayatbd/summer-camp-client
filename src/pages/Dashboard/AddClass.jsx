import { useState } from "react";


const AddClass = () => {
//     const [className, setClassName] = useState('');
//   const [classImage, setClassImage] = useState(null);
//   const [availableSeats, setAvailableSeats] = useState('');
//   const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <div className="max-w-md mx-auto my-20">
      <h1 className="text-2xl font-bold mb-4">Add a Class</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label htmlFor="className" className="block mb-2 font-medium">
            Class name:
          </label>
          <input
            type="text"
            id="className"
            name="className"
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="classImage" className="block mb-2 font-medium">
            Class Image:
          </label>
          <input
            type="file"
            id="classImage"
            name="classImage"
            accept="image/*"
            required
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="instructorName" className="block mb-2 font-medium">
            Instructor name:
          </label>
          <input
            type="text"
            id="instructorName"
            name="instructorName"
            readOnly
            value="John Doe"
            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="instructorEmail" className="block mb-2 font-medium">
            Instructor email:
          </label>
          <input
            type="email"
            id="instructorEmail"
            name="instructorEmail"
            readOnly
            value="john.doe@example.com"
            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="availableSeats" className="block mb-2 font-medium">
            Available seats:
          </label>
          <input
            type="number"
            id="availableSeats"
            name="availableSeats"
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block mb-2 font-medium">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            step="0.01"
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <input type="hidden" id="status" name="status" value="pending" />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddClass;