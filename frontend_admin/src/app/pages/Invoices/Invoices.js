import React, { useEffect, useState } from "react";
import OrderInvoices from "./Partials/OrderInvoices";
import EventInvoices from "./Partials/EventInvoices";
import { getAllOrders } from "./services/invoiceService";

const Invoices = () => {
  // Dữ liệu mẫu (sẽ truyền vào từ API hoặc từ dữ liệu gốc)
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true); // Bắt đầu tải
      try {
        const ordersFromApi = await getAllOrders();
        setOrders(ordersFromApi);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false); // Hoàn tất tải
      }
    };
    fetchEvents();
  }, []);

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
        <OrderInvoices invoices={orders} />
      ) : (
        <EventInvoices invoices={eventData} />
      )}
    </div>
  );
};

export default Invoices;
