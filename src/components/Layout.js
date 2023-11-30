import { Outlet } from "react-router-dom";

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
