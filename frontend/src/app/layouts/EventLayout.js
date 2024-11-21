import React from "react";
import { Outlet } from "react-router-dom";
import EventSidebar from "../components/EventSidebar";

function EventLayout() {
  return (
    <div className="flex bg-black">
      <EventSidebar />
      <main style={{ flex: 1 }}>
        <div className="flex items-center text-2xl pl-4 h-16 bg-bg-main border-b-2 border-[#A19393] font-semibold text-white">
          Sự kiện ----
        </div>
        <Outlet />
      </main>
    </div>
  );
}

export default EventLayout;
