import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import ResponsiveMenu from "./ResponsiveMenu";

const MenuItems = () => {
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);
  const showMenu = () => {
    setShowResponsiveMenu(!showResponsiveMenu);
  };
  return (
    <>
      <ul className="hidden md:flex gap-8 p-6 uppercase">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="absolute right-6 scale-150 md:hidden">
        <GiHamburgerMenu onClick={showMenu} className="scale-150" />
      </div>
      <ResponsiveMenu
        showResponsiveMenu={showResponsiveMenu}
        showMenu={showMenu}
      />
    </>
  );
};

export default MenuItems;
