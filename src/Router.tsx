import { Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Toast } from "./components/Toast";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Subscribe } from "./pages/Subscribe";
import { Suitors } from "./pages/Suitors";

export function Router() {
  const { pathname } = useLocation();
  return (
    <Toast>
      {["/", "/cadastro"].includes(pathname) ? null : <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/cadastro" element={<Subscribe />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/pretendentes" element={<Suitors dogAvatar={""} dogName={""} dogAge={0} dogBreed={""} dogGender={"Macho"} locale={""} dogImages={""} ownerAvatar={""} ownerName={""} ownerAge={0} ownerCareer={""} telefone={0} message={""} />} />
      </Routes>
      {["/", "/cadastro"].includes(pathname) ? null : <Footer />}
    </Toast>
  );
}
