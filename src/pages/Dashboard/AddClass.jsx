import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const img_host_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  const img_host_url = `https://api.imgbb.com/1/upload?key=${img_host_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.classImage[0]);

    fetch(img_host_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        console.log(imgRes);
        if (imgRes.success) {
          const imgURL = imgRes.data.display_url;
          console.log(data, imgURL);
          const {
            availableSeats,
            className,
            instructorEmail,
            instructorName,
            price,
          } = data;
          const newClass = {
            availableSeats: parseFloat(availableSeats),
            className,
            email: instructorEmail,
            instructorName,
            price: parseFloat(price),
            image: imgURL,
          };
          console.log(newClass);
          axiosSecure.post("/class", newClass).then((data) => {
            console.log("after posting new class item", data.data);
            if (data.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Class added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });

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
            {...register("className", { required: true })}
            id="className"
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
            {...register("classImage", { required: true })}
            id="classImage"
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
            {...register("instructorName", { required: true })}
            id="instructorName"
            value={user?.displayName}
            className="w-full px-4 py-2 rounded-md border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="instructorEmail" className="block mb-2 font-medium">
            Instructor email:
          </label>
          <input
            type="email"
            {...register("instructorEmail", { required: true })}
            id="instructorEmail"
            value={user?.email}
            className="w-full px-4 py-2 rounded-md border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="availableSeats" className="block mb-2 font-medium">
            Available seats:
          </label>
          <input
            type="number"
            {...register("availableSeats", { required: true })}
            id="availableSeats"
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
            {...register("price", { required: true })}
            id="price"
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
