import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/LoginForm/Login";
import Register from "./components/RegisterForm/Register";
import FormLayout from "./components/FormLayout";
import HomePage from "./page/HomePage";
import PersistLogin from "./components/PersistLogin";
import RootPage from "./page/RootPage";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<RootPage />} />

        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route path="homepage" element={<HomePage />} />
          </Route>
        </Route>
      </Route>

      <Route path="/" element={<FormLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
