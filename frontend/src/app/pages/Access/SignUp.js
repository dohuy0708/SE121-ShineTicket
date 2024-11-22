import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="w-full bg-bg-main text-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 relative">
        <XMarkIcon className="absolute h-6 top-4 right-4 hover:text-primary cursor-pointer" />
        <div className="text-center">
          <img
            src="./shineticket.png"
            className="h-20 mx-auto"
            alt="ShineTicket Logo"
          />
        </div>
        <h1 className="text-xl font-bold leading-tight text-white">
          Tạo tài khoản{" "}
          <span className="text-primary text-2xl">ShineTicket</span>
        </h1>
        <form className="space-y-4 md:space-y-6" action="#">
          <div>
            <input
              type="text"
              name="full-name"
              id="full-name"
              className="bg-gray-50 border border-gray-300 text-black rounded-lg focus:outline-primary block w-full p-2.5"
              placeholder="Nhập họ tên của bạn"
              required=""
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-black rounded-lg focus:outline-primary block w-full p-2.5"
              placeholder="Nhập email"
              required=""
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Nhập mật khẩu"
              className="bg-gray-50 text-black rounded-lg focus:outline-primary block w-full p-2.5"
              required=""
            />
          </div>
          <div>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Nhập lại mật khẩu"
              className="bg-gray-50 text-black rounded-lg focus:outline-primary block w-full p-2.5"
              required=""
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-light text-gray-200">
              Đã có tài khoản?{" "}
              <Link
                to="/login"
                className="font-medium text-primary hover:underline"
              >
                Đăng nhập
              </Link>
            </p>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Đăng ký
          </button>
        </form>
      </div>
    </div>
  );
}
