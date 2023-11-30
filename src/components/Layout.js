import { Outlet } from "react-router-dom";
import Left from "../Left";
import Right from "../Right";

const Layout = () => {
  return (
    <main className="App">
      <Left />
      <Right />
      <Outlet />
    </main>
  );
};

export default Layout;
