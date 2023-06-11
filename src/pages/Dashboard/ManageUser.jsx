import { useQuery } from "@tanstack/react-query";

const ManageUser = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleAdminMaking = (admin) => {
    console.log(admin);
  };

  const handleInstructorMaking = (instructor) => {
    console.log(instructor);
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
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleAdminMaking(user)}
                      className="btn btn-ghost bg-emerald-400 p-2"
                    >
                      Admin
                    </button>
                  )}
                <button
                  onClick={handleInstructorMaking}
                  className="btn btn-ghost bg-emerald-400 p-2 ml-2"
                >
                  Instructor
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUser;
