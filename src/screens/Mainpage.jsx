import Navbar from '../components/Mainpage/navbar';
import Middlebox from '../components/Mainpage/middlebox';
import Container from '../components/Mainpage/bottom';
import { useState,useEffect } from 'react'

import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

const Mainpage = () => {

 return(
  <div>
 
       <div>
     <Navbar />
   </div>
   <div>
     <Middlebox/>
   </div>
   <div>
     <Container />
   </div> 
   
  </div>
 )
};

export default Mainpage;
