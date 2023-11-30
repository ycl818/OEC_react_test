import { Outlet } from "react-router-dom";
import "./FormLayout.css";
import Left from "../Left";
import "./Layout.css";
const FormLayout = () => {
  return (
    <>
      <Left />
      <main className="formLayout">
        <div className="container">
          <span></span>

          <Outlet />
        </div>
      </main>
    </>
  );
};

export default FormLayout;
