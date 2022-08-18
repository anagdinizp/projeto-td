import { Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Toast } from "./components/Toast";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { ProfileMobile } from "./pages/ProfileMobile";
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
        <Route path="/perfilmobile" element={<ProfileMobile />} />
        <Route path="/pretendentes" element={<Suitors suitorAvatar={""} suitorName={""} suitorAge={0} suitorBreed={""} suitorGender={"Macho"} suitorLocale={""} suitorImages={""} ownerSuitorAvatar={""} ownerSuitorName={""} ownerSuitorAge={0} ownerSuitorCareer={""} ownerSuitorTelefone={0} ownerSuitorMessage={""} />} />
      </Routes>
      {["/", "/cadastro", "/perfil", "/perfilmobile"].includes(pathname) ? null : <Footer />}
    </Toast>
  );
}
