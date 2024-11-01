import { Outlet } from "react-router-dom"
import MediaQuery from 'react-responsive';
import { useState, useEffect } from "react";
import ResponsiveComponent from "../../Models/F3/mainpage";
import './device.css'


const CreateTemplate = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (

    <div className="my-4 mx-14 ">

      <div className="flex justify-around">
        
          
          <div className="device-iphone-x">
            <ResponsiveComponent />
          </div>
        
        {/* <div className="mobile-preview">
          <h2>Google Pixel 2</h2>
          <div className="device-pixel-2">
            <ResponsiveComponent />
          </div>
        </div>
        <div className="mobile-preview">
          <h2>Samsung Galaxy S9</h2>
          <div className="device-galaxy-s9">
            <ResponsiveComponent />
          </div>
        </div> */}
      </div>
      <div className=" my-2 justify-center items-center flex">
        <button className="bg-blue-500 w-32 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-mdbg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md transform transition-transform duration-300 hover:scale-110">
          Select
        </button>
      </div>
    </div>
  )
}

export default CreateTemplate