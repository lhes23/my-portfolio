import React from "react";
import { motion } from "framer-motion";

const Section = () => {
  return (
    <div className="bg-hero-image bg-cover bg-center bg-fixed w-full h-screen flex items-center px-4">
      <motion.div
        className="backdrop-blur uppercase text-center font-extrabold text-white p-10"
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <h1 className="text-6xl drop-shadow-sm">Lester Reandino</h1>
        <h3>Web Developer</h3>
      </motion.div>
    </div>
  );
};

export default Section;
