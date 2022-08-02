import { Route, Routes } from "react-router-dom";
import { Cadastro } from "./pages/Cadastro"
import { Inicio } from "./pages/Inicio"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Cadastro/>}/>
      <Route path="/inicio" element={<Inicio/>}/>
    </Routes>
  )
}