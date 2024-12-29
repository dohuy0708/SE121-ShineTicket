import React, { useState, useEffect } from "react";

export default function MyAccount() {
  // State để lưu thông tin người dùng
  const [formData, setFormData] = useState({
    id: "",
    username: "",
    phone_number: "",
    email: "",
    date_of_birth: "",
  });

  // Trạng thái để xác định có đang ở chế độ chỉnh sửa hay không
  const [isEditing, setIsEditing] = useState(false);

  // Hàm chuyển đổi định dạng ngày cho input date
  const formatDateForInput = (mongoDate) => {
    if (!mongoDate) return "";
    const date =
      typeof mongoDate === "string" ? new Date(mongoDate) : mongoDate;
    return date.toISOString().split("T")[0];
  };

  // Lấy dữ liệu người dùng từ localStorage khi component được mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setFormData({
        id: user.id, // Lấy id từ localStorage
        username: user.username || "",
        phone_number: user.phone_number || "",
        email: user.email || "",
        date_of_birth: formatDateForInput(user.date_of_birth) || "",
      });
    }
  }, []);

  // Hàm xử lý thay đổi dữ liệu trong các input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Hàm xử lý khi submit form (cập nhật thông tin)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEditing) {
      const userData = {
        ...formData,
        id: formData.id, // Đảm bảo có id
      };

      try {
        const response = await fetch("http://localhost:8080/api/user/edit", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        const result = await response.json();

        if (result.message.errCode === 0) {
          // Cập nhật thông tin người dùng trong localStorage
          localStorage.setItem("user", JSON.stringify(userData));
          alert("Thông tin đã được lưu!");
          setIsEditing(false);
        } else {
          alert(result.message.message || "Lỗi khi lưu thông tin");
        }
      } catch (error) {
        alert("Có lỗi xảy ra khi lưu thông tin.");
      }
    } else {
      setIsEditing(true);
    }
  };

  return (
    <div className="flex-1 h-screen bg-black mx-auto">
      <div className="flex items-center text-2xl pl-4 h-16 bg-bg-main border-b-2 border-[#A19393] font-semibold text-white mb-4">
        Sự kiện đã tạo
      </div>
      <div className="bg-bg-main text-white rounded-lg p-6 mx-6">
        <h2 className="text-xl font-semibold mb-2">Thông tin tài khoản</h2>
        <p className="text-sm text-gray-500 mb-4">
          Cung cấp thông tin chính xác để hỗ trợ mua vé hoặc xác thực vé.
        </p>
        <div className="space-y-4">
          {/* Các trường nhập thông tin */}
          <input
            type="text"
            placeholder="Tên người dùng"
            name="username"
            value={formData.username}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full text-black border border-gray-300 rounded px-3 py-2 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Số điện thoại"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full text-black border border-gray-300 rounded px-3 py-2 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled
            className="w-full text-black border border-gray-300 rounded px-3 py-2 focus:outline-none"
          />
          <input
            type="date"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full text-black border border-gray-300 rounded px-3 py-2 focus:outline-none"
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-primary text-white font-bold py-2 rounded"
          >
            {isEditing ? "Lưu" : "Sửa"}
          </button>
        </div>
      </div>
    </div>
  );
}
