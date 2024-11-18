import React from "react";
import { NavLink } from "react-router-dom";

const EventSidebar = () => {
  const menuItems = [
    { name: "<- Sự kiện đã tạo", path: "/my-events" },
    { name: "Tổng kết", path: "/summary" },
    { name: "Đơn hàng", path: "/orders" },
  ];

  return (
    <div className="w-64 bg-bg-main text-white border-r-2 border-[#A19393] font-bold text-lg  h-screen">
      <ul className="mt-16">
        {menuItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.path}
            className={({ isActive }) =>
              `py-4 px-8 cursor-pointer block ${
                isActive
                  ? "bg-[#393F4E] text-yellow-400"
                  : "hover:bg-[#393F4E] hover:text-yellow-400"
              }`
            }
          >
            <li>{item.name}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default EventSidebar;
