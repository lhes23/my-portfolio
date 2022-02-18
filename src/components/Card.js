import React from "react";
import { motion } from "framer-motion";

const Card = ({ project }) => {
  return (
    <motion.div className="max-w-sm rounded-xl overflow-hidden shadow-2xl p-4 m-2 bg-white">
      <img
        className="w-full"
        src="/img/card-top.jpg"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{project.title}</div>
        <p className="text-gray-700 text-base">{project.description}</p>
      </div>
    </motion.div>
  );
};

export default Card;
