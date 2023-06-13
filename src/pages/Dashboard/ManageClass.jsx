import { useEffect, useState } from "react";

const ManageClass = () => {
  const [classData, setClassData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/class")
      .then((response) => response.json())
      .then((data) => setClassData(data));
  }, []);

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
            <tr key={c._email}>
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
              <td>{c.instructorEmail}</td>
              <td>{c.availableSeats}</td>
              <td>{c.price}</td>
              <td>
                <div className="flex">
                  <button className="btn btn-ghost p-2">Approve</button>
                  <button className="btn btn-ghost p-2">Deny</button>
                  <button className="btn btn-ghost p-2">Feedback</button>
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
