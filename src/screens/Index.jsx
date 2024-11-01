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
    <div className="relative ">
      <video src={Video} className="fixed  w-full" autoPlay muted loop />
      <div className="h-96 w-[40rem absolute mt-40 ml-9">
        <h1 id="box" className="text-[#DCBFFF]  w-[35rem] text-left text-2xl font-bold font-sans ">
          "Discover the perfect blend of style and simplicity at E Cards, your
          go-to destination for online invitations and event organization. With
          a range of elegant designs and intuitive tools, we make it easy to
          create stunning digital invitations for weddings, birthdays,
          engagements, and more. Plus, our photo storage feature ensures your
          precious memories are always close at hand. Join us and streamline
          your event planning experience effortlessly."
        </h1>
        <button onClick={handleNavigate} id="bo" className="border-2 mt-9 ml-40 focus-within:border-violet-400 rounded-2xl h-16 w-44 text-white text-lg font-mono hover:bg-gradient-to-br from-purple-900 via-fuchsia-400 to-violet-400">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Index;
