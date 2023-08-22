import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import Swal from "sweetalert2";
import Loader from "../Shared/Loader";

const ManageClass = () => {
  const [classData, setClassData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://summer-camp-server-ten-delta.vercel.app/class")
      .then((response) => response.json())
      .then((data) => {
        setClassData(data);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Deny it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://summer-camp-server-ten-delta.vercel.app/class/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your class has been deleted.", "success");
              const remaining = classData.filter((c) => c._id !== id);
              setClassData(remaining);
            }
          });
      }
    });
  };

  if (loading) {
    return <Loader />;
  }

  const handleApprove = (id) => {
    Swal.fire("Approved!", "Your class has been approved.", "success");
    const updatedClassData = classData.map((c) => {
      if (c._id === id) {
        return { ...c, status: "approved" };
      }
      return c;
    });
    setClassData(updatedClassData);
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Pictur</th>
            <th>Class Name</th>
            <th>Instructor Name</th>
            <th>Email</th>
            <th>Available Seats</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {classData.map((c) => (
            <tr key={c._id}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={c.image} />
                    </div>
                  </div>
                </div>
              </td>
              <td>{c.className}</td>
              <td>{c.instructorName}</td>
              <td>{c.email}</td>
              <td>{c.availableSeats}</td>
              <td>{c.price}</td>
              <td>
                <div className="flex">
                  <button
                    className="btn btn-success rounded-full"
                    disabled={c.status === "approved"}
                    onClick={() => handleApprove(c._id)}
                  >
                    {c.status === "approved" ? "Approved" : "Approve"}
                  </button>
                  <button
                    onClick={() => handleDelete(c._id)}
                    className="btn btn-secondary rounded-full"
                  >
                    Deny
                  </button>
                  <button className="btn btn-info rounded-full">
                    Feedback
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClass;
