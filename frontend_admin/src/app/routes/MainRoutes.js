import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AdminLayout from "../layouts/AdminLayout";
import Events from "../pages/Events/Events";
import Pay from "../pages/Pay/Pay";
import Invoices from "../pages/Invoices/Invoices";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/invoices" element={<Invoices />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
