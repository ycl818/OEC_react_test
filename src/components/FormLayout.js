import { Outlet } from "react-router-dom";
import "./FormLayout.css";
const FormLayout = () => {
  return (
    <main className="formLayout">
      <div className="container">
        <span></span>
        {/* <span></span>
        <span></span> */}
        <Outlet />
      </div>
    </main>
  );
};

export default FormLayout;
