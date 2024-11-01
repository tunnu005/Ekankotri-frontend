// Navbar.js
import { IoMdMenu } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";
import './animations/animation1.css'

import React from 'react';
import { useState } from 'react';
import { Rotate } from "react-awesome-reveal"
import { Tuple } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const Navbar = ({setalbum,setmap,setcombine}) => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigator = useNavigate()
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <nav className="fixed top-0 z-50 w-full bg-gradient-to-r from-lime-400 via-green-400 via-emerald-300  to-teal-200 p-4 shadow-lg">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
         < div  onClick={()=>{navigator('')}} className="text-xl font-semibold text-gray-800 cursor-pointer">Wedding</div>
          {isMobile ? (
            <div>
              <span
                onClick={toggleDropdown}
                className="cursor-pointer text-gray-600 hover:text-gray-800 transition duration-300"
              >
                {
                  isDropdownOpen ?  <ImCancelCircle/> :  <IoMdMenu/>
                }
              </span>
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <Rotate>
                <div className="absolute mt-2  bg-white border rounded-md shadow-lg right-10">
                  <div
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={()=>{navigator('map');}}
                  >
                    Address
                  </div>
                  <div
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={()=>{navigator('');}}
                  >
                    PreWedding
                  </div>
                  <div
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={()=>{navigator('album');}}
                  >
                    Album
                  </div>
                  <div
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={()=>{navigator('');}}
                  >
                    RSVP
                  </div>
                  <div
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={()=>{navigator('');}}
                  >
                    Contact
                  </div>
                </div>
                </Rotate>
              )}
            </div>
          ) : (
            // Links for Larger Screens
            <ul className="flex space-x-4">
              <li className="text-gray-600 hover:text-gray-800 transition duration-300 cursor-pointer"  onClick={()=>{navigator('map');}}>
                Address
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition duration-300 cursor-pointer" onClick={()=>{navigator('');}}>
                PreWedding
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition duration-300 cursor-pointer"  onClick={()=>{navigator('album');}}>
                Album
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition duration-30 cursor-pointer"   onClick={()=>{navigator('');}}>
                RSVP
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition duration-300 cursor-pointer"  onClick={()=>{navigator('');}}>
                Contact
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
