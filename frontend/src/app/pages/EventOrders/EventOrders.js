import React, { useState, useEffect } from "react";
import { getAllOrders } from "./services/orderService";
import { ToastContainer, toast } from "react-toastify";
import OrderInvoices from "./Partials/OrderInvoices";
import { useParams } from "react-router-dom";
export default function EventOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true); // Bắt đầu tải
      try {
        const orderApi = await getAllOrders(id);
        setOrders(orderApi);
      } catch (error) {
        console.error("Error fetching refund:", error);
      } finally {
        setLoading(false); // Hoàn tất tải
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="flex-1  mx-auto">
      <div className="mx-6">
        <h2 className="text-white text-2xl font-medium mt-4">
          Danh sách đơn hàng
        </h2>
        {loading ? (
          <div className="text-center text-gray-500">Đang tải...</div>
        ) : (
          <OrderInvoices invoices={orders} />
        )}
        <ToastContainer />
      </div>
    </div>
  );
}
