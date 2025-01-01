import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Timer from "./Partials/Timer";
import MomoPaymentModal from "./Partials/MomoPaymentModal";
import EventInfo from "./Partials/EventInfo";
import CartInfo from "./Partials/CartInfo";
import PaymentInfo from "./Partials/PaymentInfo";
// Event Information Component

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
    <div className="bg-black text-white  min-h-screen ">
      <div className="bg-bg-main  bg-cover bg-center ">
        <div className="flex flex-col max-w-7xl mx-auto  md:flex-row text-white px-8 pt-4 pb-4 rounded-lg  space-y-4 md:space-y-0 md:space-x-4">
          <EventInfo event={event} />
          <div className="w-[14rem] h-full px-4 pt-6 pb-4 border border-white/40 overflow-hidden  rounded-3xl bg-white/25 backdrop-blur-xl backdrop-brightness-90 flex justify-center items-center flex-col gap-4">
            <span className="">Hoàn tất đặt vé trong</span>
            <Timer minutes={minutes} seconds={seconds} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2 ">
          <PaymentInfo info={event.organizer_id} />
        </div>
        <div className="space-y-4 mr-4 mt-6 max-w-[25rem]">
          <CartInfo items={items} total={total} />
        </div>
      </div>

      <MomoPaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        amount={total}
        info={event?.organizer_id}
      />
    </div>
  );
}
