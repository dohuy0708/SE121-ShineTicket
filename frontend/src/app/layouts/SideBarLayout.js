import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function SidebarLayout() {
  return (
    <div className="flex bg-black min-h-screen">
      {/* Sidebar cố định */}
      <div className="sticky top-0 h-screen">
        <Sidebar />
      </div>
      {/* Nội dung chính */}
      <main className="flex-1 bg-white">
        <Outlet />
      </main>
    </div>
  );
}

export default SidebarLayout;
