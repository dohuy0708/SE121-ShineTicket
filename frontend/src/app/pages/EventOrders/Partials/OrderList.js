import React from "react";

const OrderList = ({ orders, onSelectOrder }) => {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="text-white text-left font-bold">
          <th className="border p-2">Mã đơn hàng</th>
          <th className="border p-2">Khách hàng</th>
          <th className="border p-2">Trạng thái</th>
          <th className="border p-2">Tổng tiền</th>
          <th className="border p-2">Ngày đặt</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr
            key={order.id}
            className="hover:bg-gray-500 cursor-pointer text-white hover:text-black"
            onClick={() => onSelectOrder(order)}
          >
            <td className="border p-2">{order.id}</td>
            <td className="border p-2">{order.customer}</td>
            <td className="border p-2">
              <span
                className={`p-1 text-white rounded ${
                  order.status === "Paid"
                    ? "bg-green-500"
                    : order.status === "Pending"
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
              >
                {order.status}
              </span>
            </td>
            <td className="border p-2">{order.total} VND</td>
            <td className="border p-2">{order.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderList;
