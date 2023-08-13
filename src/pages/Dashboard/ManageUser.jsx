import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaUser } from "react-icons/fa";

const ManageUser = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure("/users");
    return res.data;
  });

  // make admin

  const handleAdminMaking = (user) => {
    console.log(user);
    fetch(
      `https://summer-camp-server-ten-delta.vercel.app/users/admin/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "The user is Admin Now!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  // make instructor

  const handleInstructorMaking = (user) => {
    console.log(user);
    fetch(
      `https://summer-camp-server-ten-delta.vercel.app/users/instructor/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "The user is Instructor Now!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="overflow-x-auto w-full">
      <div className="table-responsive">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-center">Picture</th>
              <th className="text-center">Name</th>
              <th className="text-center">Email</th>
              <th className="text-center">Role</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user) => (
              <tr key={user.email}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <FaUser
                          size={16}
                          className="w-full h-full p-3 rounded-full border border-black"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-center">{user.name}</td>
                <td className="text-center">{user.email}</td>
                <td className="text-center">
                  {user.role === "admin" ? (
                    <button className="btn btn-disabled mr-2 rounded-full">
                      ADMIN
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAdminMaking(user)}
                      className="btn btn-success mr-2 rounded-full hover:bg-emerald-400"
                    >
                      Admin
                    </button>
                  )}
                  {user.role === "instructor" ? (
                    <button className="btn btn-disabled rounded-full p-2">
                      INSTRUCTOR
                    </button>
                  ) : (
                    <button
                      onClick={() => handleInstructorMaking(user)}
                      className="btn btn-accent rounded-full hover:bg-emerald-400 p-2"
                    >
                      Instructor
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
