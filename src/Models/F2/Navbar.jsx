import React, { useState } from "react";

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
    <div className="z-10 text-black space-x-5">
      <div className="ml-auto rounded-bl-full pt-3 pl-12 pr-8 sm:rounded-br-full bg-gradient-to-br from-purple-300 via-red-200 to-pink-100 space-x-5 text-xl font-mono fixed top-0 right-0 flex items-center justify-between sm:w-96 w-auto">
        <div className="sm:hidden">
          <button
            onClick={toggleDropdown}
            className="text-black focus:outline-none"
            aria-expanded={showDropdown}
            aria-controls="navbar-menu"
          >
            Menu
          </button>
        </div>
        <div className="hidden sm:flex space-x-4">
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("album")}>Album</button>
          <button onClick={() => scrollToSection("family")}>Family</button>
          <button onClick={() => scrollToSection("map")}>Map</button>
        </div>
        {showDropdown && (
          <div
            id="navbar-menu"
            className="sm:hidden absolute top-12 right-0 bg-white rounded-lg shadow-lg opacity-70 flex flex-col items-start p-4 space-y-2"
          >
            <button onClick={() => scrollToSection("home")}>Home</button>
            <button onClick={() => scrollToSection("album")}>Album</button>
            <button onClick={() => scrollToSection("family")}>Family</button>
            <button onClick={() => scrollToSection("map")}>Map</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
