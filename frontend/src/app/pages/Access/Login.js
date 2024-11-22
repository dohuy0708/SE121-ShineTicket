import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  const [isModalOpen, setModalOpen] = useState(false);

  const nav = useNavigate();
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  const signIn = () => {
    nav("/");
  };
  const confirmSendPassword = () => {
    toggleModal();
  };
  return (
    <div class="w-full bg-bg-main text-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8 relative">
        <XMarkIcon
          onClick={() => {
            nav("/");
          }}
          className="absolute h-6 top-4 right-4 hover:text-primary cursor-pointer"
        />
        <div className="text-center">
          <img src="./shineticket.png" className="h-20 mx-auto" />
        </div>
        <h1 class="text-xl  font-bold leading-tight text-white ">
          Đăng nhập vào{" "}
          <span className="text-primary text-2xl">ShineTicket</span>
        </h1>
        <form class="space-y-4 md:space-y-6" action="#">
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-black rounded-lg  focus:outline-primary block w-full p-2.5"
              placeholder="name@company.com"
              required=""
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-white"
            >
              Mật khẩu
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50  text-black  rounded-lg focus:outline-primary  block w-full p-2.5"
              required=""
            />
          </div>
          <div class="flex items-center justify-between">
            <p class="text-sm font-light text-gray-200">
              Chưa có tài khoản?{" "}
              <Link
                to="/signup"
                class="font-medium text-primary hover:underline"
              >
                Đăng ký
              </Link>
            </p>
            <button
              type="button"
              onClick={toggleModal}
              className="text-sm font-medium text-white hover:underline"
            >
              Quên mật khẩu?
            </button>
          </div>
          <button
            onClick={signIn}
            class="w-full  text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Đăng nhập
          </button>
        </form>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
            <XMarkIcon
              className="absolute h-6 top-4 right-4 text-gray-500 hover:text-primary cursor-pointer"
              onClick={toggleModal}
            />
            <h2 className="text-xl font-bold text-black mb-4">Quên mật khẩu</h2>
            <p className="text-sm text-gray-700 mb-4">
              Nhập email của bạn và chúng tôi sẽ gửi mật khẩu mới tới email.
            </p>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="reset-email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="reset-email"
                  placeholder="name@company.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                  required=""
                />
              </div>
              <button
                onClick={confirmSendPassword}
                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Xác nhận
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
