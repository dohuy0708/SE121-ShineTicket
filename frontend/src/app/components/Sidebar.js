import React from "react";
import { NavLink } from "react-router-dom";
import {
  TicketIcon,
  CalendarDaysIcon,
  PencilSquareIcon,
  UserCircleIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const menuItems = [
    {
      name: "Vé đã mua",
      path: "/my-tickets",
      icon: <TicketIcon className="h-6 inline mr-2" />,
    },
    {
      name: "Sự kiện đã tạo",
      path: "/my-events",
      icon: <CalendarDaysIcon className="h-6 inline mr-2" />,
    },
    {
      name: "Tạo sự kiện",
      path: "/create-event",
      icon: <PencilSquareIcon className="h-6 inline mr-2" />,
    },
    {
      name: "Tài khoản",
      path: "/my-account",
      icon: <UserCircleIcon className="h-6 inline mr-2" />,
    },
    {
      name: "Trở về",
      path: "/",
      icon: <ArrowLeftIcon className="h-6 inline mr-2" />,
    },
  ];

  return (
    <div className="w-64 bg-bg-main text-white border-r-2 border-[#A19393] font-bold text-lg  h-screen">
      <div className="  py-4">
        <img src="/shineticket.png" className="h-24 mx-auto" />
      </div>
      <ul>
        {menuItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.path}
            className={({ isActive }) =>
              `h-16 px-8 cursor-pointer flex items-center ${
                isActive
                  ? "bg-[#393F4E] text-primary"
                  : "hover:bg-[#393F4E] hover:text-primary"
              }`
            }
          >
            {item.icon}
            <li>{item.name}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
