import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MyAccount() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    birthDate: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted Data:", formData);
  };

  return (
    <div className="flex-1 h-screen bg-black mx-auto  ">
      <div className="flex  items-center text-2xl pl-4 h-16 bg-bg-main border-b-2 border-[#A19393] font-semibold text-white mb-4">
        Sự kiện đã tạo
      </div>
      <div className="bg-bg-main text-white rounded-lg p-6 mx-6">
        <h2 className="text-xl font-semibold mb-2">Thông tin tài khoản</h2>
        <p className="text-sm text-gray-500 mb-4">
          Cung cấp thông tin chính xác để hỗ trợ mua vé hoặc xác thực vé.
        </p>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Họ và tên"
            className="w-full text-black border border-gray-300 rounded px-3 py-2 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Số điện thoại"
            className="w-full text-black border border-gray-300 rounded px-3 py-2 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full text-black border border-gray-300 rounded px-3 py-2 focus:outline-none"
          />
          <input
            type="date"
            className="w-full text-black border border-gray-300 rounded px-3 py-2 focus:outline-none"
          />
          <div>
            <p className="text-sm mb-2">Giới tính</p>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input type="radio" name="gender" className="mr-2" /> Nam
              </label>
              <label className="flex items-center">
                <input type="radio" name="gender" className="mr-2" /> Nữ
              </label>
              <label className="flex items-center">
                <input type="radio" name="gender" className="mr-2" /> Khác
              </label>
            </div>
          </div>
          <button className="w-full bg-yellow-400 text-white font-bold py-2 rounded">
            Hoàn thành
          </button>
        </div>
      </div>
    </div>
  );
}
