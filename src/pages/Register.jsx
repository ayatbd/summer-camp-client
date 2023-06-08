
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const [passwordError, setPasswordError] = useState('');

    const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (event) => {
    setSuccess("");

    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo, confirm);


    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("created user", user);
        setError("");
        setSuccess("User has created successfully");
        form.reset();
      })
      .catch((error) =>{
        console.log(error)
        setError(error.message)
      });
  };
    

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/;
        if (!passwordRegex.test(password)) {
          setPasswordError(
            'Password should be at least 6 characters long, contain a capital letter, and a special character.'
          );
        } else {
          setPasswordError('');
        }
      };
    return (
        <div className="flex flex-col items-center py-20 justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
            <input
            name="name"
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            //   value={name}
            //   onChange={handleNameChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
            <input
            name="email"
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            //   value={email}
            //   onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
            <input
            name="password"
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            //   value={password}
              onChange={(e) => {
                // handlePasswordChange(e);
                validatePassword(e.target.value);
              }}
              required
            />
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-1">Confirm Password</label>
            <input
            name="confirm"
              type="password"
              id="confirmPassword"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            //   value={confirmPassword}
            //   onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="photoURL" className="block text-gray-700 font-medium mb-1">Photo URL</label>
            <input
            name="photo"
              type="text"
              id="photoURL"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            //   value={photoURL}
            //   onChange={handlePhotoURLChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full mb-6"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-start text-orange-600">{error}</p>
        <p className="mt-4 text-start text-green-600">{success}</p>
      </div>
    </div>
    );
};

export default Register;