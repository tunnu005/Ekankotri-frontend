import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'
import { signup } from "../../states/action-creators";
import { useAuthContext } from "../../context/useAuthcontext";

import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";



const Signup = () => {

  const navigate = useNavigate();
  // const { message,auth } = useSelector((state) => state.user);



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
      toast("Password not match", {
        action: {
          label: "Okay",
          onClick: () => console.log("!Password")
        }
      })
      return;
    }
    const resp = await signup(email, password);
    console.log('fetch success')
    // console.log(message,auth)  
    console.log('resp : ',resp);

    setEmail("")
    setPassword("")
    setRepeatPassword("")

    if(resp.status === 201){
      navigate('/main')
    }else{
      toast("User Already exist", {
        action: {
          label: "Okay",
          onClick: () => console.log("!User")
        }
      })
      return
    }

  };


  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center w-full sm:max-w-md mx-auto p-4">
      <div className="bg-black opacity-80  p-6 rounded-lg">
        <div id="typewriter" className="font-mono text-start mb-6"></div>

        {/* Conditional rendering of form based on hideForm state */}
        <div className="text-black ">
          {!hideForm && (
            <form onSubmit={handleSignup}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-200 rounded-lg p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-200 rounded-lg p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  className="bg-gray-200 rounded-lg p-2 w-full"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-300 text-white rounded-lg px-4 py-2 mt-4"

              >
                Sign Up
              </button>
            </form>
          )}
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Signup;