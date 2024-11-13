import React from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function SidebarLayout() {
  return (
    <div className="flex bg-black">
      <Sidebar />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
}

export default SidebarLayout;
