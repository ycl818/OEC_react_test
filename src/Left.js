import { useLocation, useNavigate } from "react-router-dom";
import "./Left.css";
import useAuth from "./hooks/useAuth";
import useLogout from "./hooks/useLogout";

function Left() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const logout = useLogout();
  const { auth } = useAuth();
  const signOut = async () => {
    await logout();

    navigate(from, { replace: true });
  };

  const homeNavigate = () => {
    if (auth?.accessToken) {
      navigate("/homepage");
    } else {
      navigate("/");
    }
  };
  return (
    <div className="Left">
      <div className="button-group">
        <button onClick={homeNavigate}>Home</button>
        <button
          onClick={() => navigate("/login")}
          disabled={auth?.accessToken ? true : false}
        >
          Login
        </button>
        <button onClick={signOut} disabled={!auth?.accessToken ? true : false}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Left;
