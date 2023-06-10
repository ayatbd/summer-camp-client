/* eslint-disable react/no-unescaped-entities */
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { app } from "../firebase/firebase.config";
import Swal from "sweetalert2";


const Login = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    console.log(user, error);
    
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
  
    const { signIn } = useContext(AuthContext);
    const Navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
  
    const handleLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      // console.log(name, email, password);
  
      signIn(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          Navigate(from, { replace: true});
        })
        .catch((error) => {
          console.log(error);
          setError(error.message)
        });
    };
  
    const handleLoginWithPopUp = () => {
      signInWithPopup(auth, googleProvider)
      .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)
        })
            .then(res => res.json())
            .then(() => {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User logged in successfully.',
                showConfirmButton: false,
                timer: 1500
            });
                Navigate(from, { replace: true });
            })
    })
    };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="max-w-md w-full mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
          <input
          name="email"
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            // value={email}
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
            // value={password}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full mb-6"
        >
          Login
        </button>
      </form>
      <Link>
      <button
        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full flex items-center justify-center mb-6"
        onClick={handleLoginWithPopUp}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          {/* Google logo path */}
        </svg>
        Login with Google
      </button>
      </Link>
      
      <p className="text-gray-600 mb-4">Don't have an account? <a href="/register" className="text-blue-500">Register</a></p>
    </div>
  </div>
  );
};

export default Login;
