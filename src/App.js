import Left from "./Left";
import Right from "./Right";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/LoginForm/Login";
import Register from "./components/RegisterForm/Register";
import FormLayout from "./components/FormLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>

      <Route path="/" element={<FormLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
