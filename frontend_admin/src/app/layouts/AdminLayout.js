import React from "react";
import { Outlet } from "react-router-dom";
import Siderbar from "../components/Siderbar";
import Header from "../components/Header";
export default function AdminLayout({ children }) {
  return (
    <div className=" flex  bg-[#030712]">
      <Siderbar />
      <main className="flex flex-1 ml-wsidebar ">
        <Header />
        <div className="flex-1 min-h-screen mt-hheader bg-[#030712]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
