import { Component, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Toast } from "./components/Toast";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
  const { pathname } = useLocation();
  return (
    <Toast>
      {["/", "/cadastro"].includes(pathname) ? null : <Sidebar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/cadastro" element={<Subscribe />} />
      </Routes>
    </Toast>
  );
}
