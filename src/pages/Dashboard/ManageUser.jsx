const ManageUser = () => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          { <tr>
            <th>
                1
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="/tailwind-css-component-profile-2@56w.png"
                    />
                  </div>
                </div>
              </div>
            </td>
            <td>
              ayat
            </td>
            <td>email.com</td>
            <th className="">
              <button className="btn btn-accent">Admin</button>
              <button className="btn btn-accent ml-1">Instructor</button>
            </th>
          </tr>}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUser;
