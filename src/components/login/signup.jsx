import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { signup } from "../../states/action-creators";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [hideForm, setHideForm] = useState(true); // State to control form visibility

  useEffect(() => {
    const text = "Welcome To Ecards! Let's Begin The Adventure";
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
      } else {
        clearInterval(intervalId);
        setHideForm(false); // Show the form after typewriter effect completes
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      toast("Passwords do not match", {
        action: {
          label: "Okay",
          onClick: () => console.log("Password mismatch")
        }
      });
      return;
    }
    const resp = await signup(email, password);
    setEmail("");
    setPassword("");
    setRepeatPassword("");

    if (resp.status === 201) {
      navigate('/main');
    } else {
      toast("User Already Exists", {
        action: {
          label: "Okay",
          onClick: () => console.log("User exists")
        }
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
      <div className="bg-black bg-opacity-80 p-6 rounded-lg max-w-md w-full mx-4 text-center">
        <div id="typewriter" className="font-mono text-start mb-6 text-lg"></div>

        {!hideForm && (
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <div className="mb-4">
              <input
                type="password"
                placeholder="Confirm Password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                className="bg-gray-200 rounded-lg p-2 w-full text-black"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-400 text-white rounded-lg px-4 py-2 w-full"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default Signup;
