import React, { useState } from "react";
import CodeModal from "./CodeModal";
import QRCode from "react-qr-code";

export default function TicketCard({ ticket }) {
  const [isQRCodeVisible, setQRCodeVisible] = useState(false);

  return (
    <div className="flex flex-col md:flex-row bg-bg-main p-4 rounded-lg shadow-md text-white w-full mb-4 border border-gray-700">
      {/* Bên trái: thông tin chính */}
      <div className="flex flex-1 flex-col md:flex-row gap-4 items-center">
        <div className="flex items-center w-32 h-32">
          <img
            src={
              ticket?.logo_url
                ? `http://localhost:8080/images/${ticket?.logo_url}`
                : "/shineticket.png"
            }
            alt={ticket?.event_name}
            className=" rounded-lg object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{ticket?.event_name}</h3>
          <p className="text-gray-400 mb-1">
            📅{" "}
            {new Date(ticket?.ticket_date).toLocaleDateString("vi-VN", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </p>
          <p className="text-gray-400 mb-1">📍 {ticket?.event_address}</p>

          <p className="text-gray-400">
            <span className="font-semibold">Loại:</span> {ticket?.ticket_type}
          </p>
          <p className="text-gray-400"></p>
        </div>
      </div>

      {/* Bên phải: Giá, trạng thái, nút QR Code */}
      <div className="flex flex-col justify-center items-end mt-4 md:mt-0 md:ml-6">
        <p className="text-lg font-bold text-primary">
          {parseFloat(ticket?.price).toLocaleString()} VNĐ
        </p>
        <span
          className={`px-4 py-1 rounded-full text-sm font-semibold mt-2 ${
            new Date(ticket?.ticket_date).toISOString().split("T")[0] >
            new Date().toISOString().split("T")[0]
              ? "bg-green-600 text-white" // Sắp diễn ra
              : new Date(ticket?.ticket_date).toISOString().split("T")[0] ===
                new Date().toISOString().split("T")[0]
              ? "bg-yellow-600 text-white" // Đang diễn ra
              : "bg-gray-600 text-gray-300" // Đã kết thúc
          }`}
        >
          {new Date(ticket?.ticket_date).toISOString().split("T")[0] >
          new Date().toISOString().split("T")[0]
            ? "Sắp diễn ra"
            : new Date(ticket?.ticket_date).toISOString().split("T")[0] ===
              new Date().toISOString().split("T")[0]
            ? "Đang diễn ra"
            : "Đã kết thúc"}
        </span>

        <button
          onClick={() => setQRCodeVisible(true)}
          className="mt-4 bg-primary text-black px-4 py-1 rounded-lg"
        >
          Xuất vé
        </button>
      </div>

      {/* Modal hiển thị QR Code */}
      {isQRCodeVisible && (
        <CodeModal onClose={() => setQRCodeVisible(false)}>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4">
              {ticket?.event_name}
            </h3>
            <QRCode value={ticket?.ticket_id} size={200} />
            <p className="text-gray-400 mt-4">Mã vé: {ticket?.ticket_id}</p>
            <button
              onClick={() => setQRCodeVisible(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Đóng
            </button>
          </div>
        </CodeModal>
      )}
    </div>
  );
}
