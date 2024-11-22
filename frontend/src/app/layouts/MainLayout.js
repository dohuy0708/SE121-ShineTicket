import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <main className="pt-18 m-0 p-0 box-border">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
