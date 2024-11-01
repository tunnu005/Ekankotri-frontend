import React from "react";
import { useMediaQuery } from "react-responsive";
import Mobileview from "./Responsive/MobileView";
import DesktopView from "./Responsive/DesktopView";
const Middle2 = ({ data }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return isMobile ? <Mobileview data={data} /> : <DesktopView data={data} />;
};

export default Middle2;
