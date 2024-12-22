import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { mockLogin } from "../../../services/service";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const nav = useNavigate();

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const signIn = async () => {
    try {
      const userData = await mockLogin(email, password); // Gọi service login
      localStorage.setItem("id", userData.id); // Lưu thông tin user vào localStorage
      nav("/"); // Điều hướng đến trang chủ
    } catch (error) {
      alert(error);
    }
  };

  const confirmSendPassword = () => {
    toggleModal();
  };

  return (
    <div className="w-full bg-bg-main text-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 relative">
        <XMarkIcon
          onClick={() => {
            nav("/");
          }}
          className="absolute h-6 top-4 right-4 hover:text-primary cursor-pointer"
        />
        <div className="text-center">
          <img src="./shineticket.png" className="h-20 mx-auto" alt="Logo" />
        </div>
        <h1 className="text-xl font-bold leading-tight text-white">
          Đăng nhập vào{" "}
          <span className="text-primary text-2xl">ShineTicket</span>
        </h1>
        {errorMessage && (
          <p className="text-sm text-red-500 text-center">{errorMessage}</p>
        )}
        <form className="space-y-4 md:space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-black rounded-lg focus:outline-primary block w-full p-2.5"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-white"
            >
              Mật khẩu
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="bg-gray-50 text-black rounded-lg focus:outline-primary block w-full p-2.5"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-light text-gray-200">
              Chưa có tài khoản?{" "}
              <Link
                to="/signup"
                className="font-medium text-primary hover:underline"
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
            type="button"
            onClick={signIn}
            className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
                  required
                />
              </div>
              <button
                type="button"
                onClick={confirmSendPassword}
                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
