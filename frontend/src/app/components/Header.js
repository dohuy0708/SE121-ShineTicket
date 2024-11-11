// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-primary w-full fixed top-0 left-0 right-0 z-10">
      <div className="max-w-screen-xl  mx-auto">
        <div className=" py-4 px-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            SHINETICKET
          </Link>
          <div className="flex space-x-4 items-center">
            <input
              type="text"
              placeholder="Bạn tìm gì hôm nay?"
              className="px-4 py-2 rounded-md w-96 outline-none"
            />
            <button className="bg-black text-white px-4 py-2 rounded-md">
              Tìm kiếm
            </button>
          </div>
          <div className="flex space-x-4">
            <Link
              to="/MyEvents"
              className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md"
            >
              Tạo sự kiện
            </Link>
            <button className="bg-yellow-400 text-black font-semibold">
              Vé đã mua
            </button>
            <button className="bg-yellow-400 text-black font-semibold">
              Tài khoản
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
