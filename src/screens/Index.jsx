import React from "react";
import { useNavigate } from "react-router-dom";
import Video from "../../public/purplebg.mp4";
import "../css/heart.css";

const Index = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/signin");
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-700 to-indigo-900 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <video
          src={Video}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-50"
        ></video>
      </div>

      <div className="relative p-6 bg-black bg-opacity-60 rounded-xl max-w-lg mx-auto text-center lg:max-w-3xl lg:text-left lg:p-12">
        <h1
          id="box"
          className="text-xl font-bold font-sans leading-relaxed lg:text-2xl text-[#DCBFFF]"
        >
          "Discover the perfect blend of style and simplicity at E Cards, your
          go-to destination for online invitations and event organization. With
          a range of elegant designs and intuitive tools, we make it easy to
          create stunning digital invitations for weddings, birthdays,
          engagements, and more. Plus, our photo storage feature ensures your
          precious memories are always close at hand. Join us and streamline
          your event planning experience effortlessly."
        </h1>

        <button
          onClick={handleNavigate}
          id="bo"
          className="mt-8 px-8 py-3 bg-gradient-to-br from-purple-900 via-fuchsia-400 to-violet-400 rounded-2xl text-lg font-mono hover:from-purple-700 hover:to-fuchsia-600 transition duration-200 transform hover:scale-105 lg:mt-10"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Index;
