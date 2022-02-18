import logo from "./lr-logo.svg";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <motion.circle initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
    </div>
  );
}

export default App;
