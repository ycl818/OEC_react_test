import { Outlet } from "react-router-dom";
import Left from "../Left";
import Right from "../Right";

const Layout = () => {
  return (
    <main className="App">
      <div className="main">
        <div className="gradient" />
      </div>
      <Outlet />
    </main>
  );
};

export default Layout;
