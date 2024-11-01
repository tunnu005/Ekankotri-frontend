import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useNavigate,
} from "react-router-dom";
import Navbar from "./navbar";
import Middle1 from "./middle1";

import { useState, useEffect } from "react";

export const Model3 = ({ data }) => {

  return (
    <>
      <div>
       <Middle1 data={data}/>
      </div>
    </>
  );
};

export default Model3;
