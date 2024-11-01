import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Model3 from "../Models/F3/mainpage";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Model1 from "../Models/F1/model1";

const Model = () => {
  // const [modelname,setmodelname] = useState('')
  // const title = useSelector((state)=>state.user.title)
  // const navigator = useNavigate()
  // useEffect(()=>{
  //    if(title == undefined)
  //    {
  //     navigator('/main')
  //    }
  //    else{
  //     navigator(`${title}`)
  //    }
  // })
  return (
    <div>
      <div className=" w-screen h-screen overflow-y-scroll">
        <Model3 />
      </div>
      <div className=" justify-center flex items-center">
        <button className="relative overflow-hidden bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-md">
          <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600"></span>
          <span className="absolute inset-0 transform scale-0 bg-white rounded-lg" />
          <span className="relative z-10">Select</span>
        </button>
        
      </div>
    </div>
  );
};

export default Model;
