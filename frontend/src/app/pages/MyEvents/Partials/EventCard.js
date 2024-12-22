// EventCard.js
import React from "react";
import { Link } from "react-router-dom";
const EventCard = ({ event }) => {
  return (
    <div className="bg-bg-main p-4 rounded-lg text-white m-6">
      <div className="flex border-b-2 border-white pb-6">
        <div className="w-80 bg-gray-500 h-[9.5rem] rounded-lg"></div>
        <div className="ml-4 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold">{event?.name}</h3>
            <p className="text-md mt-4 text-primary">
              📅 {event?.date} ({event?.time})
            </p>
            <p className="text-md mt-2 text-primary">📍 {event?.location}</p>
          </div>
        </div>
      </div>
      <div className="mt-4  max-w-xl mx-auto ">
        <div className="flex  justify-around text-sm text-center text-white">
          <span className="cursor-pointer font-semibold hover:text-primary">
            <Link to="/summary">Tổng kết</Link>
          </span>
          <span className="cursor-pointer font-semibold hover:text-primary">
            <Link to="/create-event">Chỉnh sửa</Link>
          </span>
          <span className="cursor-pointer font-semibold hover:text-primary">
            <Link to="/orders">Đơn hàng</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
