import React from "react";
import logo from "../lr-logo.svg";
import MainNav from "./MainNav";
import MenuItems from "./MenuItems";

const Header = () => {
  return (
    <>
      <MainNav />
      <div className="fixed w-full text-white flex justify-between p-10 items-center backdrop-blur">
        <div className="">
          <img src={logo} alt="" className="object-cover h-20 w-50" />
        </div>
        <nav className=" bg-slate-700">
          <MenuItems />
        </nav>
      </div>
    </>
  );
};

export default Header;
