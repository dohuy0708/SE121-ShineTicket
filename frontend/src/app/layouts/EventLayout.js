import React from "react";
import { Outlet } from "react-router-dom";
import EventSidebar from "../components/EventSidebar";

function EventLayout() {
  return (
    <div className="flex bg-black">
      <EventSidebar />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
}

export default EventLayout;
