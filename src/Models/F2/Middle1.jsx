import React, { useState, useEffect } from "react";
import "./../../css/heart.css";
import img1 from "../../assets/couplle.jpg";
import img2 from "../../assets/couples.jpg";
import { useDispatch } from "react-redux";
import { uploadImage } from "../../states/action-creators";

const Middle1 = ({ data }) => {
  const [selectedBride, setSelectedBride] = useState(img1);
  const [selectedGroom, setSelectedGroom] = useState(img2);
  const [isEditing, setIsEditing] = useState(false);
  const [scrollX, setScrollX] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollX =
        window.scrollX ||
        document.documentElement.scrollLeft ||
        document.body.scrollLeft;
      setScrollX(currentScrollX);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleImageChange = (setImageState) => async (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = await dispatch(uploadImage(file));
      console.log("Uploaded image URL:", imageUrl);
      if (imageUrl) {
        const fullImageUrl = `http://localhost:8000${imageUrl}`;
        setImageState(fullImageUrl);
      }
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-200 via-purple-300 to-yellow-200 flex flex-col items-center justify-center p-4">
      <div
        className={
          "flex flex-col lg:flex-row items-center justify-center mb-12 "
        }
        id="box"
      >
        <div className="border-1 shadow-2xl rounded-br-3xl border-black lg:h-[16rem] p-2 pt-2 w-[12rem] mt-8 lg:mt-32 lg:ml-32 bg-gradient-to-b from-amber-200 to-purple-200 relative">
          <img
            src={selectedGroom}
            className="h-60 w-auto object-cover shadow-2xl rounded-3xl"
            alt="Couple 1"
          />
          {isEditing && (
            <input
              type="file"
              name=""
              id=""
              onChange={handleImageChange(setSelectedGroom)}
              className="absolute inset-0 opacity-0 cursor-pointer"
              accept="image/*"
            />
          )}
        </div>
        <div className="text-4xl lg:text-[13rem] lg:ml-36 font-Recursive mt-4 lg:mt-0 text-center lg:text-left">
          {data.Groom_name}
        </div>
      </div>

      <div
        className={"flex flex-col lg:flex-row items-center justify-center "}
        id="box"
      >
        <div className="text-4xl lg:text-[13rem] lg:mt-12 text-center lg:text-right">
          {data.Bride_name}
        </div>
        <div className="border-1 shadow-2xl rounded-br-3xl p-2 border-black lg:h-[16rem] lg:w-[12rem] pt-2 mt-8 lg:mt-12 lg:ml-36 bg-gradient-to-b from-amber-200 to-purple-200 relative">
          <img
            src={selectedBride}
            className="h-60 w-full object-cover shadow-2xl rounded-3xl"
            alt="Couple 2"
          />
          {isEditing && (
            <input
              type="file"
              className="absolute inset-0 opacity-0 cursor-pointer"
              accept="image/*"
              onChange={handleImageChange(setSelectedBride)}
              name=""
              id=""
            />
          )}
        </div>
      </div>
      <button
        onClick={handleEditToggle}
        className="absolute bottom-10 left-10 bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        {isEditing ? "Finish Editing" : "Change Images"}
      </button>
    </div>
  );
};

export default Middle1;
