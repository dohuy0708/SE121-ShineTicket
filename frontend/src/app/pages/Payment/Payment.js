import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Timer from "../../components/Timer";
import MomoPaymentModal from "../../components/MomoPaymentModal";

// Event Information Component
const EventInfo = ({ event }) => {
  return (
    <div className=" text-white  rounded-lg w-full space-y-3">
      <p className="text-2xl font-bold font-inter leading-[150%] overflow-hidden break-words pb-4 mr-6 mb-4 border-b-2 border-white">
        {event.name}
      </p>

      <h2 className="font-bold text-base  text-primary">📍 {event.location}</h2>
      <h2 className="font-bold text-base  text-primary">📅 {event.date}</h2>
    </div>
  );
};
const PaymentInfo = () => {
  return (
    <div className=" text-white p-4 rounded-lg space-y-4 mr-4">
      <div className="flex justify-between items-center text-yellow-500 font-bold">
        <h2>THANH TOÁN</h2>
        <h2>Chọn lại vé</h2>
      </div>
      <div className="bg-bg-main p-4 rounded-lg">
        <h3 className="text-yellow-500 font-bold mb-2">Thông tin nhận vé</h3>
        <p>Lê Huy Hoàng 0987654321</p>
        <p>22520562@gm.uit.edu.vn</p>
        <button className="text-yellow-500 text-sm mt-2">Sửa thông tin</button>
      </div>
      <div className="bg-bg-main p-4 rounded-lg">
        <h3 className="text-yellow-500 font-bold mb-2">
          Phương thức thanh toán
        </h3>
        <div className="flex items-center">
          <input type="radio" id="momo" name="payment" className="mr-2" />
          <label htmlFor="momo" className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png"
              alt="Momo"
              className="w-6 h-6 mr-2"
            />
            Ví momo
          </label>
        </div>
      </div>
    </div>
  );
};
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
      {/* <div className="space-y-2">
        {items.map((item, index) => (
          <div className="flex justify-between" key={index}>
            <span>{item.name}</span>
            <span>{item.quantity}</span>
            <span>{item.total}</span>
          </div>
        ))}
      </div> */}
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
export default function Payment() {
  const location = useLocation();
  const { items, total, event } = location.state || {};
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Shared timer state
  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (seconds === 0 && minutes === 0) {
        navigate("/");
        clearInterval(timerId);
      } else {
        if (seconds <= 0) {
          setMinutes((prev) => prev - 1);
          setSeconds(59);
        } else {
          setSeconds((prev) => prev - 1);
        }
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, [seconds]);

  return (
    <div className="bg-black text-white min-h-screen space-y-4">
      <div className="bg-bg-main  bg-cover bg-center">
        <div className="flex flex-col max-w-7xl mx-auto  md:flex-row text-white px-8 pt-4 pb-4 rounded-lg  space-y-4 md:space-y-0 md:space-x-4">
          <EventInfo event={event} />
          <div className="w-[14rem] h-full px-4 pt-6 pb-4 border border-white/40 overflow-hidden  rounded-3xl bg-white/25 backdrop-blur-xl backdrop-brightness-90 flex justify-center items-center flex-col gap-4">
            <span className="">Hoàn tất đặt vé trong</span>
            <Timer minutes={minutes} seconds={seconds} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <PaymentInfo />
        </div>
        <div className="space-y-4 mr-4 max-w-[25rem]">
          <CartInfo items={items} total={total} />
        </div>
      </div>

      <MomoPaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        amount={total}
      />
    </div>
  );
}
