// src/components/Header.js
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  TicketIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
const Header = () => {
  const nav = useNavigate();
  const searchEvent = () => {
    nav("/search");
  };

  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef(null);

  // Ẩn menu khi nhấn bên ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle hiển thị menu
  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };
  return (
    <header className="bg-primary w-full fixed top-0 left-0 right-0 z-10">
      <div className="max-w-screen-xl  mx-auto">
        <div className="px-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            <img src="/Logo.png" alt="Logo ShineTicket" className="h-12" />
          </Link>
          <div className="flex my-4 items-center relative">
            <MagnifyingGlassIcon
              className="text-gray-500 h-6 absolute top-2 right-2 cursor-pointer"
              onClick={searchEvent}
            />
            <input
              type="text"
              placeholder="Bạn tìm gì hôm nay?"
              className="pl-4 pr-8 py-2 rounded-md w-96 outline-none "
            />
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/create-event"
              className="border-2 border-solid border-white text-white font-semibold px-6 py-1.5 rounded-3xl"
            >
              Tạo sự kiện
            </Link>
            <Link to="/my-tickets" className="flex items-center p-1 ">
              <TicketIcon className="text-white h-7 inline mr-2 " />
              <button className=" text-white h-7 font-semibold ">
                Vé đã mua
              </button>
            </Link>
            <div
              className="flex items-center cursor-pointer relative"
              ref={menuRef}
            >
              <div
                className="text-white flex items-center font-semibold"
                onClick={toggleMenu}
              >
                <UserCircleIcon className="h-7 inline mr-2" />
                Tài khoản
                <ChevronDownIcon className="inline text-white h-5 font-bold ml-1" />
              </div>
              {isVisible && (
                <div className="absolute bottom-[-10px] h-20 right-0 left-0 translate-y-full bg-white rounded-lg shadow-lg">
                  <Link
                    to="/my-account"
                    className="flex items-center p-1 text-black h-10"
                  >
                    <UserCircleIcon className="text-black h-7 inline mr-2 " />
                    <div
                      className="h-7 font-semibold text-black"
                      onClick={toggleMenu}
                    >
                      Tài khoản
                    </div>
                  </Link>
                  <div className="border-b-2 border-dashed border-gray-500"></div>
                  <Link to="/login" className="flex items-center p-1 ">
                    <ArrowLeftStartOnRectangleIcon className="text-black h-7 inline mr-2 " />
                    <div
                      className="text-black h-7 font-semibold"
                      onClick={toggleMenu}
                    >
                      Đăng xuất
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
