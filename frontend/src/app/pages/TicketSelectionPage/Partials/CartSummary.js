import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const CartSummary = ({ items, total, event }) => {
  const navigate = useNavigate();

  const handlePayment = () => {
    if (items?.length) {
      localStorage.setItem("isNewOrder", true);
      navigate("/payment", {
        state: { items, total, event },
      });
    } else {
      toast.warning("Vui lòng chọn vé");
    }
  };
  return (
    <div className="bg-bg-main flex flex-col justify-between text-white p-5 rounded-md h-[100%]">
      <div>
        <div className="border-b border-gray-300 mb-4">
          <h2 className="text-lg font-semibold mb-4">{event?.event_name}</h2>
          <p className="font-medium mt-2 text-primary flex items-center">
            <CalendarDaysIcon className="inline h-6 text-white mr-2" />{" "}
            {new Date(event?.start_date).toLocaleDateString("vi-VN", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </p>
          <p className="font-medium mt-2 text-primary flex items-center">
            <MapPinIcon className="inline h-6 text-white mr-2" />{" "}
            {event?.venue_id?.venue_name}
          </p>
          <p className="font-medium mt-2 mb-4 text-white flex items-center">
            {event?.venue_id?.street_name.charAt(0).toUpperCase() +
              event?.venue_id?.street_name.slice(1)}
            , {event?.venue_id?.ward}, {event?.venue_id?.district},{" "}
            {event?.venue_id?.city}
          </p>
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
                <td className="text-right py-1">
                  {item.total.toLocaleString()} đ
                </td>
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
