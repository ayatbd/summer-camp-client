
import { useForm } from 'react-hook-form';

const AddClass = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto my-20">
      <h1 className="text-2xl font-bold mb-4">Add a Class</h1>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="mb-4">
          <label htmlFor="className" className="block mb-2 font-medium">
            Class name:
          </label>
          <input
            type="text"
            {...register('className', { required: true })} id="className"
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
            {...register('classImage', { required: true })} id="classImage"
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
            {...register('instructorName', { required: true })} id="instructorName"
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
            {...register('instructorEmail', { required: true })} id="instructorEmail"
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
            {...register('availableSeats', { required: true })} id="availableSeats"
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
            {...register('price', { required: true })} id="price"
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