import { motion } from "framer-motion";

import "./Navbar.css";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import useLogout from "../../hooks/useLogout";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { auth } = useAuth();
  const logout = useLogout();
  const signOut = async () => {
    await logout();
    navigate(from, { replace: true });
  };
  return (
    <div className="navbar">
      <div className="wrapper">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate("/")}
        >
          OEC Group
        </motion.h2>
        <div className="navbarBtns navBtn">
          <button onClick={() => navigate("/homepage")}>Home</button>
          {auth?.accessToken ? (
            <div className="navBtn">
              <button onClick={signOut}>Logout</button>
            </div>
          ) : (
            <div className="navBtn ">
              <button onClick={() => navigate("/login")}>Login</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
