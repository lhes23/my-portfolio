import React from "react";
import logo from "../lr-logo.svg";
import MenuItems from "./MenuItems";

const Header = () => {
  return (
    <div className="fixed w-full text-white flex justify-between p-10 items-center backdrop-blur">
      <div className="">
        <img src={logo} alt="" className="object-cover h-20 w-50" />
      </div>
      <nav className="">
        <MenuItems />
      </nav>
    </div>
  );
};

export default Header;
