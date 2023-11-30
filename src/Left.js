import { useLocation, useNavigate } from "react-router-dom";
import "./Left.css";
import { useContext } from "react";
import AuthContext from "./context/AuthProvider";
import useAuth from "./hooks/useAuth";

function Left() {
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
    <div className="Left">
      <div className="button-group">
        <button onClick={() => navigate("/")}>Home</button>
        <button
          onClick={() => navigate("/login")}
          disabled={auth?.user ? true : false}
        >
          Login
        </button>
        <button onClick={logout} disabled={!auth?.user ? true : false}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Left;
