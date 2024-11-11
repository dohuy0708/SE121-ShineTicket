import React from "react";
import { useNavigate } from "react-router-dom";

const CartSummary = ({ items, total, event }) => {
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate("/payment", {
      state: { items, total, event },
    });
  };
  return (
    <div className="bg-bg-main flex flex-col justify-between text-white p-5 rounded-md h-[100%]">
      <div>
        <div className="border-b border-gray-300 mb-4">
          <h2 className="text-lg font-semibold mb-4">{event.name}</h2>
          <p className="text-primary mb-2">{event.date}</p>
          <p className="text-gray-300 mb-4">{event.location}</p>
        </div>

        <table className="w-full text-sm mb-4">
          <thead>
            <tr>
              <th className="text-left">Vé</th>
              <th className="text-center">Số lượng</th>
              <th className="text-right">Tổng</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td className="text-left py-1">{item.name}</td>
                <td className="text-center py-1">{item.quantity}</td>
                <td className="text-right py-1">{item.total} đ</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <div className="flex justify-between font-semibold mb-4">
          <span>Thành tiền</span>
          <span>{total} đ</span>
        </div>
        <button
          onClick={handlePayment}
          className="w-full bg-primary text-black font-semibold py-2 rounded-md hover:bg-white"
        >
          Thanh toán
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
