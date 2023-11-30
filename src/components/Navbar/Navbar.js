import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigatie = useNavigate();
  return (
    <div className="navbar">
      {/* Sidebar */}

      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          OEC Group
        </motion.span>
        <div className="login">
          <button onClick={() => navigatie("/login")}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
