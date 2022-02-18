import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const MenuItems = () => {
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);

  return (
    <>
      <ul className="hidden sm:flex gap-8 p-6 uppercase bg-white/50">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="sm:hidden">
        <GiHamburgerMenu
          onClick={() => {
            setShowResponsiveMenu(!showResponsiveMenu);
          }}
        />
      </div>

      <ul className={showResponsiveMenu ? "flex-col" : "hidden"}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </>
  );
};

export default MenuItems;
