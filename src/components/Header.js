import React, { useState } from "react";
import logo from "../lr-logo.svg";

const Header = () => {
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);
  const showMenuHandler = () => {
    setShowResponsiveMenu(!showResponsiveMenu);
  };
  return (
    <div className="fixed w-full text-white flex justify-between p-10 items-center backdrop-blur">
      <div className="">
        <img src={logo} alt="" className="object-cover h-20 w-50" />
      </div>
      <nav className="">
        <ul className="hidden sm:flex gap-8 p-6 uppercase bg-white/50">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul className={showResponsiveMenu ? "" : "hidden"}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
