import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ResponsiveMenu = ({ showResponsiveMenu, showMenu }) => {
  return (
    <ul
      className={
        showResponsiveMenu
          ? "flex-col flex items-center fixed inset-0 left-1/4 bg-black/40 backdrop-blur-lg justify-center gap-3"
          : "hidden"
      }
    >
      <AiOutlineCloseCircle onClick={showMenu} />
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  );
};

export default ResponsiveMenu;
