import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const [isFetching, setIsFetching] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFetching(true);
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      // Handle success (e.g., save user data, redirect, etc.)
      console.log("Login successful:", res.data);
    } catch (err) {
      // Handle error (e.g., show error message)
      console.error("Login failed:", err);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <div>
    <Navbar/>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <span className="text-4xl font-bold mb-4">Login</span>
      <form
        className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 text-gray-700 bg-transparent border border-white rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter your username..."
            ref={userRef}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 text-gray-700 bg-transparent border border-white rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter your password..."
            ref={passwordRef}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isFetching && "opacity-50 cursor-not-allowed"
            }`}
            type="submit"
            disabled={isFetching}
          >
            Login
          </button>
        </div>
      </form>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
        <Link className="text-white" to="/register">
          Register
        </Link>
      </button>
    </div>
    </div>
  );
}
