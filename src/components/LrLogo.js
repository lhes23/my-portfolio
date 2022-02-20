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
    // <motion.svg
    //   version="1.2"
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 514 487"
    //   width="100"
    //   height="50"
    // >
    //   <title>New Project</title>
    //   <defs>
    //     <linearGradient
    //       id="g1"
    //       x1="40"
    //       y1="247"
    //       x2="470"
    //       y2="247"
    //       gradientUnits="userSpaceOnUse"
    //     >
    //       <stop offset="0" stop-color="#000000" />
    //       <stop offset="1" stop-color="#ffffff" />
    //     </linearGradient>
    //   </defs>

    //   <motion.path
    //     variants={pathVariants}
    //     initial="hidden"
    //     animate="show"
    //     fill="none"
    //     stroke="#000"
    //     strokeWidth="20"
    //     id="Shape 1"
    //     className="s0"
    //     d="m255 462c-118.9 0-215-96.1-215-215c0-118.9 96.1-215 215-215c118.9 0 215 96.1 215 215c0 118.9-96.1 215-215 215z"
    //   />
    //   <motion.path
    //     variants={pathVariants}
    //     initial="hidden"
    //     animate="show"
    //     fill="#000"
    //     id="L"
    //     className="s1"
    //     d="m267 242.4v52.6h-188v-140h52.2v111.6h83.6v-17z"
    //   />
    //   <motion.path
    //     variants={pathVariants}
    //     initial="hidden"
    //     animate="show"
    //     id="R"
    //     fill-rule="evenodd"
    //     className="s1"
    //     d="m422.8 193v68.8l-60.4 10.2l68.6 61h-72.2l-57-50.8l-34.6 5.8v45h-52.2v-140zm-52.2 28.4h-103.4v35.2l103.4-17.4z"
    //   />
    // </motion.svg>
    <motion.svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 514 487"
      width="100"
      height="50"
    >
      <title>New Project</title>
      <defs>
        <image
          width="231"
          height="297"
          id="img1"
          href="data:image/png;base64,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"
        />
      </defs>

      <motion.path
        variants={pathVariants}
        initial="hidden"
        animate="show"
        id="Shape 1"
        fill="none"
        stroke="#000"
        strokeWidth="20"
        d="m255 462c-118.9 0-215-96.1-215-215c0-118.9 96.1-215 215-215c118.9 0 215 96.1 215 215c0 118.9-96.1 215-215 215z"
      />
      <motion.use
        variants={pathVariants}
        initial="hidden"
        animate="show"
        id="R"
        href="#img1"
        x="141"
        y="94"
      />
    </motion.svg>
  );
};

export default LrLogo;
