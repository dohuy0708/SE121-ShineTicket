import React, { useEffect, useState } from "react";
import OrderInvoices from "./Partials/OrderInvoices";
import EventInvoices from "./Partials/EventInvoices";
import { getAllOrders, getAllRefund } from "./services/invoiceService";
import { ToastContainer, toast } from "react-toastify";

const Invoices = () => {
  const [orders, setOrders] = useState([]);
  const [refunds, setRefunds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("order");

  const fetchEvents = async () => {
    setLoading(true); // Bắt đầu tải
    try {
      const ordersFromApi = await getAllOrders();
      setOrders(ordersFromApi);
    } catch (error) {
      console.error("Error fetching events:", error);
      toast.error("Không thể tải dữ liệu. Vui lòng thử lại!");
    } finally {
      setLoading(false); // Hoàn tất tải
    }
  };
  const fetchRefund = async () => {
    setLoading(true); // Bắt đầu tải
    try {
      const refundApi = await getAllRefund();
      setRefunds(refundApi);
    } catch (error) {
      console.error("Error fetching refund:", error);
      toast.error("Không thể tải dữ liệu. Vui lòng thử lại!");
    } finally {
      setLoading(false); // Hoàn tất tải
    }
  };
  useEffect(() => {
    fetchEvents();
    fetchRefund();
  }, []);

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

      {loading ? (
        <div className="text-center text-gray-500">Đang tải...</div>
      ) : activeTab === "order" ? (
        <OrderInvoices invoices={orders} refresh={fetchEvents} />
      ) : (
        <EventInvoices invoices={refunds} />
      )}
      <ToastContainer />
    </div>
  );
};

export default Invoices;
