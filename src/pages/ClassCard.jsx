/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useInstructor from "../hooks/useInstructor";
import useAdmin from "../hooks/useAdmin";

const ClassCard = ({ classData }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const { _id, availableSeats, image, name, className, instructorName, price } =
    classData;

  const handleSelectClass = (classData) => {
    console.log(classData);
    if (user && user.email) {
      const classInfo = {
        classInfoId: _id,
        availableSeats,
        image,
        name,
        className,
        instructorName,
        price,
        email: user.email,
      };
      fetch("https://summer-camp-server-ten-delta.vercel.app/select", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(classInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setButtonDisabled(true);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "The class added successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login before clicking on",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div>
        <div
          className={`p-1 border border-gray-300 rounded ${
            availableSeats === 0 ? "bg-red-500" : "bg-white"
          }`}
        >
          <img src={image} alt={name} className="w-full h-40 object-cover" />
          <div className="bg-teal-200 p-1 mt-1">
            <h3 className="text-lg font-bold">{className}</h3>
            <p className="text-gray-500">Instructor: {instructorName}</p>
            <p className="text-gray-500">Available Seats: {availableSeats}</p>
            <p className="text-gray-500">Price: ${price}</p>
            <button
              onClick={() => handleSelectClass(classData)}
              disabled={
                availableSeats === 0 ||
                buttonDisabled ||
                isAdmin ||
                isInstructor
              }
              className={`btn btn-accent ${
                availableSeats === 0 ||
                buttonDisabled ||
                isAdmin ||
                isInstructor
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              {buttonDisabled ? "Selected" : "Select"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
