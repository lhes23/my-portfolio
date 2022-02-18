import logo from "./lr-logo.svg";
import "./App.css";
import { motion } from "framer-motion";
import Section from "./components/Section";
import Header from "./components/Header";

const containerVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
  hover: {
    scale: 1.1,
    origin: 0,
  },
};

function App() {
  return (
    <>
      {/* <motion.div className="flex justify-center align-middle border">
        <motion.h1
          className="text-5xl font-bold underline m-10 align-middle border-8 h-20"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          Hi My Name is Lester
        </motion.h1>
      </motion.div> */}
      <Header />
      <Section />
    </>
  );
}

export default App;
