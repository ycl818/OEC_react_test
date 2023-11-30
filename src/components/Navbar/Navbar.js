import { motion } from "framer-motion";

import "./Navbar.css";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { setAuth } = useContext(AuthContext);
  const { auth } = useAuth();

  const logout = async () => {
    setAuth({});
    navigate(from, { replace: true });
  };
  return (
    <div className="navbar">
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate("/")}
        >
          OEC Group
        </motion.span>
        {auth?.user ? (
          <div className="navBtn">
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <div className="navBtn">
            <button onClick={() => navigate("/login")}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;