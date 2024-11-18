import React, { useState } from "react";
import MomoPaymentModal from "./MomoPaymentModal";

const CartInfo = ({ items, total }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="bg-white text-black p-4 rounded-lg shadow-lg space-y-4">
      <div className="flex justify-between items-center border-b border-gray-300 pb-2">
        <h3 className="font-bold">Thông tin đặt vé</h3>
        <button className="text-blue-500 text-sm">Chọn lại vé</button>
      </div>
      <table className="w-full text-sm mb-4">
        <thead>
          <tr>
            <th className="text-left ">Vé</th>
            <th className="text-center">Số lượng</th>
            <th className="text-right">Tổng</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className=" border-b border-gray-400">
              <td className="text-left text-primary font-semibold pt-4 pb-2">
                {item.name}
              </td>
              <td className="text-center  pt-4 pb-2 ">{item.quantity}</td>
              <td className="text-right pt-4 pb-2 ">{item.total} đ</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center font-bold  pt-2">
        <span>Tổng tiền</span>
        <span className="text-yellow-500">{total}</span>
      </div>
      <button
        className="bg-yellow-500 text-white w-full py-2 rounded-lg font-bold"
        onClick={() => setIsModalOpen(true)}
      >
        Thanh toán
      </button>
      <MomoPaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        amount={total}
      />
    </div>
  );
};
export default CartInfo;
