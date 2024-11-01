import VideoSource from "../../public/smoke.mp4";
import React, { useState } from "react";
import Signup from "../components/login/signup";
import { Navigate, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate()
  const handleSignin=()=>{
    navigate('/signin')
  }
  return (
    <div className="bg-black">
      <div className="flex absolute w-full p-2 z-10 bg-transparnet">
        <div className=" flex items-center cursor-pointer">
          <span className="text-3xl font-bold brand-text ml-3 mt-1">
            <span className="text-5xl  font-bold">E</span>cards
          </span>
        </div>

        <div className="ml-[60rem] font-bold text-white mt-3">
          Already Have An Account?
        </div>

        <button className="ml-8 text-white" onClick={handleSignin}>Sign In</button>

      </div>
      <video
        autoPlay
        muted
        loop
        className="w-full absolute "
      >
        <source src={VideoSource} type="video/mp4" />
        {/* Add other video sources for different formats if needed */}
        Your browser does not support HTML5 video.
      </video>

      <Signup />
    </div>
  );
};

export default Login;