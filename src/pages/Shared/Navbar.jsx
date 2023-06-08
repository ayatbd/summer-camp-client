const Navbar = () => {
  return (
    <nav className="bg-primary py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-lg">Website Logo</h1>
        <ul className="space-x-4">
          <li>
            <a href="/" className="text-white hover:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="/instructors" className="text-white hover:text-gray-200">
              Instructors
            </a>
          </li>
          <li>
            <a href="/classes" className="text-white hover:text-gray-200">
              Classes
            </a>
          </li>
          <li>
            <a href="/dashboard" className="text-white hover:text-gray-200">
              Dashboard
            </a>
          </li>
          {loggedIn ? (
            <li>
              <img
                src={userProfilePicture}
                alt="User Profile"
                className="rounded-full h-8 w-8"
              />
            </li>
          ) : (
            <li>
              <a href="/login" className="text-white hover:text-gray-200">
                Login
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
