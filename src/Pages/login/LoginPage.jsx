import { useState } from "react";
import img from "../../../assets/images/illustration-authentication.svg";
import logo from "../../../assets/images/logo-large.svg";
import { Link } from "react-router-dom"; // Import useNavigate
import { useDispatch } from "react-redux";
import { setAuthToken } from "../../../backend/data/authSlice";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:9000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token); // Store token in localStorage
        dispatch(setAuthToken(data.token)); // Dispatch action to set token in Redux
        window.location.href = "/app/Overview"; // Redirect after successful login
      } else {
        setError(data.error); // Handle error from server
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center p-5 h-screen bg-[#F8F4F0]">
      <div className="relative hidden h-full max-w-[560px] flex-1 overflow-hidden rounded-[12px] bg-grey-900 p-12 lg:flex lg:flex-col">
        <img src={logo} alt="" className="z-20 relative w-56 mt-7" />
        <div className="absolute inset-0 z-0 h-full w-full">
          <img
            alt="login and signup illustration image"
            decoding="async"
            src={img}
            className="absolute inset-0 h-full w-full object-cover "
          />
        </div>
        <div className="z-10 mt-auto flex flex-col gap-8 mb-10 text-white">
          <h2 className="text-5xl font-bold max-w-[20ch]">
            Keep track of your money and save for your future
          </h2>
          <p className="text-2xl font-normal">
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </p>
        </div>
      </div>

      <div className="w-[60%] flex justify-center text-2xl">
        <div className="bg-white p-12 rounded-xl shadow-md w-[45%] flex flex-col gap-6">
          <h1 className="text-5xl font-bold mb-6">Login</h1>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-xl font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="shadow appearance-none border rounded-xl w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-xl font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded-xl w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-gray-900 text-2xl hover:bg-gray-800 text-white font-bold py-6 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full"
            >
              Login
            </button>
          </form>
          <div className="text-gray-600 text-2xl text-center p-3">
            Need to create an account?{" "}
            <Link
              to="/SignUp"
              className="text-gray-900 font-semibold underline"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
