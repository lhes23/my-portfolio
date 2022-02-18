import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const MenuItems = () => {
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);

  return (
    <>
      <ul className="hidden md:flex gap-8 p-6 uppercase">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="visible md:invisible absolute border">
        <GiHamburgerMenu
          onClick={() => {
            setShowResponsiveMenu(!showResponsiveMenu);
          }}
        />
      </div>
      <ul
        className={
          showResponsiveMenu
            ? "flex-col flex items-center fixed inset-0 left-1/4 bg-black/40 backdrop-blur-lg justify-center gap-3"
            : "hidden"
        }
      >
        <AiOutlineCloseCircle
          onClick={() => {
            setShowResponsiveMenu(!showResponsiveMenu);
          }}
        />
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </>
  );
};

export default MenuItems;
