
import React, { useEffect, useState } from "react";
import "./../../../css/heart.css";
import Image1 from "../../../assets/couplle.jpg";
import Image2 from "../../../assets/couples.jpg";

const Mobileview = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [Image1, Image2];
  const textContent1 = [`${data.events[0].name}`, "Sangeet"];
  const textContent2 = ["02-05-2004", "03-05-2004"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 6000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="bg-gradient-to-tr from-amber-200 via-purple-300 to-yellow-200 h-screen flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <div className="rounded-full mt-20 h-40 w-40 bg-gray-400">
          <img src={images[currentSlide]} alt="" className="rounded-full h-full w-full object-cover" />
        </div>
      </div>
      <div className="block w-[90%] text-[2rem] sm:text-[5rem] mt-20 text-center" id="slider">
        {textContent1[currentSlide]}
      </div>
      <div className="block w-[90%] text-[1rem] sm:text-[3rem] mt-2 text-center" id="slider">
        {textContent2[currentSlide]}
      </div>
    </div>
  );
};

export default Mobileview;
