import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Toast } from "./components/Toast";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
  const { pathname } = useLocation();
  return (
    <Toast>
      {["/", "/cadastro", "/perfil"].includes(pathname) ? null : <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/cadastro" element={<Subscribe />} />
        <Route path="/perfil" element={<Profile />} />
      </Routes>
    </Toast>
  );
}
