import React from "react";

const OrderDetail = ({ order, onClose }) => {
  if (!order) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="w-full sm:w-11/12 md:w-8/12 lg:w-1/2 xl:w-1/3 bg-white rounded-lg shadow-lg p-6 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Chi tiết đơn hàng: {order.id}
        </h2>

        <p className="text-lg">
          <strong className="font-medium text-gray-600">Khách hàng:</strong>{" "}
          {order.customer}
        </p>
        <p className="text-lg">
          <strong className="font-medium text-gray-600">Trạng thái:</strong>{" "}
          {order.status}
        </p>
        <p className="text-lg">
          <strong className="font-medium text-gray-600">Tổng tiền:</strong>{" "}
          {order.total} VND
        </p>
        <p className="text-lg">
          <strong className="font-medium text-gray-600">Ngày đặt:</strong>{" "}
          {order.date}
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">
          Danh sách vé
        </h3>
        <ul className="list-disc ml-6 space-y-2">
          {order.tickets.map((ticket, index) => (
            <li key={index} className="text-lg text-gray-700">
              {ticket.type} - {ticket.quantity} vé
            </li>
          ))}
        </ul>

        <div className="mt-6 flex justify-end">
          <button
            className="bg-red-500 text-white hover:bg-red-600 transition duration-200 px-6 py-2 rounded-full"
            onClick={onClose}
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
