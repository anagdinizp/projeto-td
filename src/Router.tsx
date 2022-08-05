import { Route, Routes } from "react-router-dom";
import { Toast } from "./components/Toast";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
  return (
    <Toast>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/cadastro" element={<Subscribe/>} />
      </Routes>
    </Toast>
  );
}
