import React from "react";
import MainNav from "./MainNav";
import MenuItems from "./MenuItems";
import { motion } from "framer-motion";
import LrLogo from "./LrLogo";

const Header = () => {
  return (
    <>
      <MainNav />
      <div className="fixed w-full text-white flex justify-between p-10 items-center backdrop-blur">
        <div className="logo">
          <LrLogo />
        </div>
        <nav className=" bg-slate-700">
          <MenuItems />
        </nav>
      </div>
    </>
  );
};

export default Header;
