import React from "react";
import { useNavigate } from "react-router-dom";
import Signup from "../components/login/signup";
// import VideoSource from "../../public/smoke.mp4"; // Uncomment if needed

const Login = () => {
  const navigate = useNavigate();

  const handleSignin = () => {
    navigate('/signin');
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center relative">
      {/* Header Section */}
      <div className="absolute top-0 w-full flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 z-20">
        <div className="flex items-center cursor-pointer mb-4 sm:mb-0">
          <span className="text-4xl font-bold brand-text text-white">
            <span className="text-5xl font-bold">E</span>cards
          </span>
        </div>

        {/* Sign In Section */}
        <div className="flex items-center text-white font-bold">
          <span className="hidden sm:inline mr-4">Already Have An Account?</span>
          <button 
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg"
            onClick={handleSignin}
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Background Video (if needed) */}
      {/* <video autoPlay muted loop className="w-full h-full absolute top-0 left-0 object-cover opacity-50 z-0">
        <source src={VideoSource} type="video/mp4" />
      </video> */}

      {/* Signup Component */}
      <div className="w-full max-w-md mx-auto p-4 z-10">
        <Signup />
      </div>
    </div>
  );
};

export default Login;
