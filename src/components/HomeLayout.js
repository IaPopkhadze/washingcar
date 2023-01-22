import React from "react";
import HomeNavbar from "./Home/HomeNavbar";
import HomeFooter from "./Home/HomeFooter";
import { Outlet } from "react-router-dom";
const HomeLayout = () => {
  return (
    <div>
      <HomeNavbar />
      <Outlet />
      <HomeFooter />
    </div>
  );
};

export default HomeLayout;
