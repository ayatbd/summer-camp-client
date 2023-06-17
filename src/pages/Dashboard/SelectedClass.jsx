import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const SelectedClass = () => {
  const [selectedClasses, setSelectedClasses] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/select?email=${user.email}`)
      .then((response) => response.json())
      .then((data) => setSelectedClasses(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/select/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your class has been deleted.", "success");
              const remaining = selectedClasses.filter((c) => c._id !== _id);
              setSelectedClasses(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Pictur</th>
            <th>Class Name</th>
            <th>Istructor Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {selectedClasses.map((c) => (
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
              <td>{c.price}</td>
              <td>
                <div className="flex gap-1">
                  <Link to="/dashboard/payment">
                    <button className="btn p-2">Pay</button>
                  </Link>
                  <button
                    onClick={() => handleDelete(c._id)}
                    className="btn text-red-400 p-2"
                  >
                    <AiFillDelete size={24} />
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

export default SelectedClass;
