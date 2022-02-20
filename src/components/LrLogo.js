import React from "react";
import { motion } from "framer-motion";

const pathVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  show: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
    },
  },
};

const LrLogo = () => {
  return (
    <motion.svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 514 487"
      width="100"
      height="50"
    >
      <title>New Project</title>
      <defs>
        <linearGradient
          id="g1"
          x1="40"
          y1="247"
          x2="470"
          y2="247"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#000000" />
          <stop offset="1" stop-color="#ffffff" />
        </linearGradient>
      </defs>

      <motion.path
        variants={pathVariants}
        initial="hidden"
        animate="show"
        fill="none"
        stroke="#000"
        strokeWidth="20"
        id="Shape 1"
        className="s0"
        d="m255 462c-118.9 0-215-96.1-215-215c0-118.9 96.1-215 215-215c118.9 0 215 96.1 215 215c0 118.9-96.1 215-215 215z"
      />
      <motion.path
        variants={pathVariants}
        initial="hidden"
        animate="show"
        fill="#000"
        id="L"
        className="s1"
        d="m267 242.4v52.6h-188v-140h52.2v111.6h83.6v-17z"
      />
      <motion.path
        variants={pathVariants}
        initial="hidden"
        animate="show"
        id="R"
        fill-rule="evenodd"
        className="s1"
        d="m422.8 193v68.8l-60.4 10.2l68.6 61h-72.2l-57-50.8l-34.6 5.8v45h-52.2v-140zm-52.2 28.4h-103.4v35.2l103.4-17.4z"
      />
    </motion.svg>
  );
};

export default LrLogo;
