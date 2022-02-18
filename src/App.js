import logo from "./lr-logo.svg";
import "./App.css";
import { motion } from "framer-motion";
import Section from "./components/Section";
import Header from "./components/Header";
import Card from "./components/Card";

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
      <Header />
      <Section />
      <div className="flex text-center align-middle p-10">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;
