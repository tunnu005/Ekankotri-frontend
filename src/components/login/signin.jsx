import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../states/action-creators/index";
import { useDispatch } from "react-redux";
// import { toast, ToastContainer } from "react-toastify";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginstate, setLoginstate] = useState("Login");
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignup = () => {
    navigate("/signup");
  };

  const HandleNavigate = () => {
    navigate("/forget");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true
    setLoginstate("Logging in..."); // Change button text

    try {
      const response = await login(username, password);
      console.log("fetched success:", response);

      if (response.success) {
        navigate("/main");
      } else {
        toast("Login fail. please try again", {
          action: {
            label: "Okay",
            onClick: () => console.log("Password mismatch")
          }
        }); // Display error toast
      }
    } catch (error) {
      toast("Login fail. please try again", {
        action: {
          label: "Okay",
          onClick: () => console.log("Password mismatch")
        }
      }); // Handle errors
      console.error("Login error:", error);
    } finally {
      setIsLoading(false); // Reset loading state
      setLoginstate("Login"); // Reset button text
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
     
      <div className="absolute top-0 w-full p-4 flex justify-between items-center z-10 bg-opacity-50 bg-black">
        <div className="flex items-center cursor-pointer">
          <span className="text-3xl font-bold ml-3 mt-1">
            <span className="text-5xl font-bold">E</span>cards
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="hidden sm:block font-bold">Not Have An Account?</span>
          <button
            className="text-white bg-blue-500 px-4 py-1 rounded-lg"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </div>
      </div>

      <div className="bg-black bg-opacity-75 p-6 rounded-lg max-w-sm mx-auto w-full sm:max-w-md text-center">
        <h1 className="text-4xl font-mono mb-4 font-extrabold">Login</h1>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username or Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-200 rounded-lg p-2 w-full text-black"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-200 rounded-lg p-2 w-full text-black"
            />
          </div>
          <h1
            onClick={HandleNavigate}
            className="font-mono text-white text-start underline hover:text-blue-400 mb-4 cursor-pointer"
          >
            Forget Password?
          </h1>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg px-4 py-2 w-full"
            disabled={isLoading} // Disable button while loading
          >
            {isLoading ? "Logging in..." : loginstate} {/* Conditional text */}
          </button>
        </form>
      </div>
      <Toaster /> {/* Toaster for displaying notifications */}
    </div>
  );
};

export default Signin;
