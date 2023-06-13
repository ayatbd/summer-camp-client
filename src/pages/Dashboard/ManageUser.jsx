import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageUser = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure("/users");
    return res.data;
  });

  // make admin 

  const handleAdminMaking = (user) => {
    console.log(user);
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: "The user is Admin Now!",
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
  };

  // make instructor 

  const handleInstructorMaking = (user) => {
    console.log(user);
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: "The user is Instructor Now!",
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th className="text-center">Name</th>
            <th className="text-center">Email</th>
            <th className="text-center">Role</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users.map((user, index) => (
            <tr key={user.email}>
              <th className="text-center">{index + 1}</th>
              <td className="text-center">{user.name}</td>
              <td className="text-center">{user.email}</td>
              <th className="text-center">
                  {user.role === "admin" ? (
                    <span className="text-bolder">ADMIN</span>
                  ) : (
                    <button
                      onClick={() => handleAdminMaking(user)}
                      className="btn btn-ghost hover:bg-emerald-400 p-2"
                    >
                      Admin
                    </button>
                  )}
                  {user.role === "instructor" ? (
                    <span className="text-bolder">INSTRUCTOR</span>
                  ) : (
                    <button
                      onClick={() => handleInstructorMaking(user)}
                      className="btn btn-ghost hover:bg-emerald-400 p-2"
                    >
                      Instructor
                    </button>
                  )}
                {/* <button
                  onClick={handleInstructorMaking}
                  className="btn btn-ghost hover:bg-emerald-400 p-2 ml-2"
                >
                  Instructor
                </button> */}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUser;
