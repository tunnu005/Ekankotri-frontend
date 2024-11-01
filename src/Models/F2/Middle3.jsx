import React, { useEffect, useState } from "react";
import "./../../css/heart.css";

const Middle3 = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const text1 = [`${data.invitedBy}`];
  const text2 = [
    "Mr Nileshbhai Ninama",
    "Mrs. Kalaben Ninama",
    "Mr Sunilbhai Ninama",
    "Ms. Nikubhai Ninama",
  ];
  const text3 = [
    "Mr Surjibhai Ninama",
    "Mrs. Babuben Ninama",
    "Mr Nitinbhai Ninama",
    "Ms. Vipulbhai Ninama",
  ];
  const text4 = [
    "Mr Jagdishbhai Ninama",
    "Mrs. Komalben Ninama",
    "Ms. Hitaishee Ninama",
    "Mr Prince Ninama",
  ];

  const allTexts = [text1, text2, text3, text4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % allTexts.length);
    }, 3000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [allTexts.length]);

  return (
    <div className="h-screen bg-gradient-to-t from-yellow-100 via-orange-200 to-purple-300 flex flex-col items-center justify-center p-4 sm:p-10">
      <div className="bg-white text-black text-center text-xl sm:text-2xl md:text-4xl border p-4 sm:p-6 rounded-tl-3xl rounded-br-2xl font-bold w-full max-w-4xl">
        "Join us in celebrating the union of Tejas and Twinkal, as two hearts become one. Your presence is the greatest gift as our families come together in love and joy. Please grace us with your company on this special day."
      </div>
      <div className="text-center pt-10">
        {allTexts[currentSlide].map((item, index) => (
          <p key={index} className="text-lg sm:text-2xl md:text-3xl p-1" id="bo">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Middle3;
