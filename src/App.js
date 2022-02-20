import "./App.css";
import { motion } from "framer-motion";
import Section from "./components/Section";
import Header from "./components/Header";
import Card from "./components/Card";

const DUMMY_PROJECTS = [
  {
    id: "p1",
    title: "Project1",
    description: "Project1 Description",
    img: "",
  },
  {
    id: "p2",
    title: "Project2",
    description: "Project2 Description",
    img: "",
  },
  {
    id: "p3",
    title: "Project3",
    description: "Project3 Description",
    img: "",
  },
];

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
      <div className="flex text-center align-middle p-10 bg-gradient-to-r from-cyan-500 to-blue-500 justify-center">
        {DUMMY_PROJECTS.map((project) => (
          <Card project={project} key={project.id} />
        ))}
      </div>
    </>
  );
}

export default App;
