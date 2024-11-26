import React, { useState } from "react";
import OrderInvoices from "./Partials/OrderInvoices";
import EventInvoices from "./Partials/EventInvoices";

const Invoices = () => {
  // Dữ liệu mẫu (sẽ truyền vào từ API hoặc từ dữ liệu gốc)
  const orderData = [
    {
      id: "INV001",
      eventName: "Sự kiện A",
      buyerName: "Nguyễn Văn A",
      paymentAmount: 100000,
      paymentDate: "2024-11-15",
      status: "Đã thanh toán",
    },
    {
      id: "INV002",
      eventName: "Sự kiện B",
      buyerName: "Trần Thị B",
      paymentAmount: 150000,
      paymentDate: "2024-11-18",
      status: "Đã thanh toán",
    },
  ];

  const eventData = [
    {
      id: "EV001",
      eventName: "Sự kiện A",
      organizerName: "Công ty XYZ",
      amountPaid: 70000,
      paymentDate: "2024-11-18",
      status: "Đã thanh toán",
    },
    {
      id: "EV002",
      eventName: "Sự kiện B",
      organizerName: "Công ty ABC",
      amountPaid: 120000,
      paymentDate: "2024-11-20",
      status: "Đã thanh toán",
    },
  ];

  const [activeTab, setActiveTab] = useState("order");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Quản lý hóa đơn</h1>
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "order" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("order")}
        >
          Hóa đơn người mua vé
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "event" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("event")}
        >
          Hóa đơn thanh toán cho tổ chức
        </button>
      </div>

      {activeTab === "order" ? (
        <OrderInvoices invoices={orderData} />
      ) : (
        <EventInvoices invoices={eventData} />
      )}
    </div>
  );
};

export default Invoices;
