import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Patients from "../pages/Patients";
// import Registro from "../pages/Registro";
// import Login from "../pages/Login";

export default function RoutesIndex() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Rutas de Auth (authentication / authorization) */}
      {/* <Route path="/registro" element={<Registro />} /> */}
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/patients" element={<Patients />} />
    </Routes>
  );
}
