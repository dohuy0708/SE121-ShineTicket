// src/components/Header.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const nav = useNavigate();
  const searchEvent = () => {
    nav("/search");
  };
  return (
    <header className="bg-primary w-full fixed top-0 left-0 right-0 z-10">
      <div className="max-w-screen-xl  mx-auto">
        <div className="px-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            <img src="/Logo.png" alt="Logo ShineTicket" className="h-12" />
          </Link>
          <div className="flex my-4 space-x-4 items-center">
            <input
              type="text"
              placeholder="Bạn tìm gì hôm nay?"
              className="px-4 py-2 rounded-md w-96 outline-none"
            />
            <button
              className="px-4 py-2 bg-black text-white rounded-md"
              onClick={searchEvent}
            >
              Tìm
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/my-events"
              className="border-2 border-solid border-white text-white font-semibold px-6 py-1.5 rounded-3xl"
            >
              Tạo sự kiện
            </Link>
            <Link to="my-tickets">
              <button className=" text-white font-semibold">Vé đã mua</button>
            </Link>

            <Link to="my-account">
              <button className=" text-white font-semibold">Tài khoản</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
