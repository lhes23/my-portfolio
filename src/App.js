import logo from "./lr-logo.svg";
import "./App.css";
import { motion } from "framer-motion";

const containerVariants = {
  initial: {
    opacity: 0,
    y: "-100vh",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};

function App() {
  return (
    <motion.div
      className="App"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <h1 className="text-5xl font-bold underline m-10 justify-center">
        Hi My Name is Lester
      </h1>
    </motion.div>
  );
}

export default App;
