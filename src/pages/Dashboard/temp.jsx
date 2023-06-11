import React from 'react';
import { useForm } from 'react-hook-form';

const AddClassForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Perform the necessary actions to add the class to the database
    // Set the status field to "pending" when creating the class
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="className">Class name</label>
        <input {...register('className', { required: true })} id="className" className="border rounded-md py-2 px-3 w-full" />
        {errors.className && <span className="text-red-500 text-xs">This field is required</span>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="classImage">Class Image</label>
        <input {...register('classImage', { required: true })} id="classImage" className="border rounded-md py-2 px-3 w-full" />
        {errors.classImage && <span className="text-red-500 text-xs">This field is required</span>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructorName">Instructor name</label>
        <input {...register('instructorName', { required: true })} id="instructorName" className="border rounded-md py-2 px-3 w-full" readOnly />
        {errors.instructorName && <span className="text-red-500 text-xs">This field is required</span>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructorEmail">Instructor email</label>
        <input {...register('instructorEmail', { required: true })} id="instructorEmail" className="border rounded-md py-2 px-3 w-full" readOnly />
        {errors.instructorEmail && <span className="text-red-500 text-xs">This field is required</span>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="availableSeats">Available seats</label>
        <input {...register('availableSeats', { required: true })} id="availableSeats" className="border rounded-md py-2 px-3 w-full" type="number" />
        {errors.availableSeats && <span className="text-red-500 text-xs">This field is required</span>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">Price</label>
        <input {...register('price', { required: true })} id="price" className="border rounded-md py-2 px-3 w-full" type="number" />
        {errors.price && <span className="text-red-500 text-xs">This field is required</span>}
      </div>

      <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full">
        Add
      </button>
    </form>
  );
};

export default AddClassForm;
