import React,{ useState, useEffect } from "react";
import Navbar from "./Navbar";
import Middle1 from "./Middle1";
import Middle2 from "./Middle2";
import Middle3 from "./Middle3";
import Middle4 from "./Middle4";
import { useSelector } from "react-redux";
const Model2 = () => {
  
  const data = useSelector((state)=>state.users.data)
    console.log(data)
    const picdata  = useSelector((state)=>state.picdata.picsdata)
    console.log(picdata)  

  return (
    <div>
      <Navbar />
      <Middle1 data={data}/>
       <Middle2 data={data}/> 
      <Middle3 data={data}/>
      <Middle4 data={data}/> 
    </div>
  );
};

export default Model2;
