import { useState } from "react";
import img from "../../../assets/images/illustration-authentication.svg";
import logo from "../../../assets/images/logo-large.svg";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state

    // API call for registration
    try {
      const response = await fetch("http://localhost:9000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }), // Include email in the request
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/"); // Redirect to login page after successful signup
      } else {
        setError(data.error || "Sign up failed. Please try again."); // Handle errors
      }
    } catch (error) {
      console.error("Error signing up:", error);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false); // Reset loading state
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
            className="absolute inset-0 h-full w-full object-cover"
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
          <h1 className="text-5xl font-bold mb-6">Sign Up</h1>
          {error && (
            <p className="text-red-500 text-2xl mb-4" aria-live="assertive">
              {error}
            </p>
          )}
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
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
          <div className="text-gray-600 text-2xl text-center p-3">
            Already have an account?{" "}
            <Link to="/" className="text-gray-900 font-semibold underline">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
