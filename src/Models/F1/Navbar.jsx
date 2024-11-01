import React, { useState } from "react";
import logo from "../../assets/logo1.jpg";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setShowDropdown(false);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-orange-100 via-red-100 to-red-200 w-[100%] h-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} className="w-11 h-10 mt-1 ml-1" alt="" />

          {/* Show dropdown button for small devices */}
          <div className="sm:hidden ml-2">
            <button
              onClick={toggleDropdown}
              className="text-black focus:outline-none ml-[12rem]"
            >
              Menu
            </button>
          </div>
        </div>

        {/* Navigation links for small and medium devices */}
        {(showDropdown || window.innerWidth >= 640) && (
          <div className="hidden sm:flex sm:mr-5 space-x-4">
            <div
              className="cursor-pointer hover:text-gray-700"
              onClick={() => scrollToSection("eventsSection")}
            >
              Events
            </div>
            <div
              className="cursor-pointer hover:text-gray-700"
              onClick={() => scrollToSection("imagesection")}
            >
              Pre Wedding
            </div>
           
            <div
              className="cursor-pointer hover:text-gray-700"
              onClick={() => scrollToSection("mapSection")}
            >
              Map
            </div>
          </div>
        )}

        {showDropdown && (
          <div className="sm:hidden absolute top-12 z-50 opacity-60 left-0 w-full bg-white border-b border-gray-300">
            <div className="text-black flex flex-col space-y-2 p-2">
              <div
                className="cursor-pointer hover:text-gray-700"
                onClick={() => scrollToSection("eventsSection")}
              >
                Events
              </div>
              <div
                className="cursor-pointer hover:text-gray-700"
                onClick={() => scrollToSection("imagesection")}
              >
                Pre Wedding
              </div>
              <div
                className="cursor-pointer hover:text-gray-700"
                onClick={() => scrollToSection("eventsSection")}
              >
                Reception
              </div>
              <div
                className="cursor-pointer hover:text-gray-700"
                onClick={() => scrollToSection("mapSection")}
              >
                Map
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
