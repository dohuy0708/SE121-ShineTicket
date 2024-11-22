import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const TicketInfo = ({ event }) => {
  // State để quản lý việc hiển thị thông tin vé
  const [isOpen, setIsOpen] = useState(false);

  // Dữ liệu vé
  const ticketData = [
    {
      name: "Early Bird Ticket",
      price: "599.000 đ",
      status: "Hết vé",
      description: "Thông tin về Early Bird Ticket.",
    },
    {
      name: "Official Ticket",
      price: "699.000 đ",
      status: "Còn vé",
      description: "Khán giả tự do chọn vị trí trong khu vực sự kiện.",
    },
    {
      name: "Combo: Official Ticket + Lightstick NTPMM",
      price: "1.048.000 đ",
      status: "Hết vé",
      description:
        "Kết hợp vé Official với Lightstick cho trải nghiệm hoàn hảo.",
    },
  ];

  return (
    <div className=" bg-[#38383D] mx-4  rounded-xl">
      <div className="">
        {/* Thời gian và nút mũi tên */}
        <div className="flex justify-between items-center px-6 py-2 text-white">
          <div className="text-lg font-medium flex items-center">
            <button
              className=" text-white px-2 "
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <ChevronDownIcon className="text-white h-5" />
              ) : (
                <ChevronRightIcon className="text-white h-5" />
              )}
            </button>
            15:00 - 22:30, 08 Tháng 12, 2024
          </div>
          <Link to={"/select-ticket"} state={{ event }}>
            <button className="py-2 my-2 rounded-md bg-primary px-10">
              Mua vé ngay
            </button>
          </Link>
        </div>

        {/* Hiển thị thông tin vé nếu isOpen là true */}
        {isOpen && (
          <div className="ticket-list">
            {ticketData.map((ticket, index) => (
              <div
                key={index}
                className="pl-16 pr-6 bg-gray-800 pt-4 pb-6 odd:bg-[#2F3033] even:bg-[#38383D] last:rounded-b-xl"
              >
                <div className="flex justify-between items-center text-white">
                  <div className="text-xl font-semibold">{ticket.name}</div>
                  <div className="text-lg font-semibold text-primary">
                    {ticket.price}
                  </div>
                </div>
                {/* <div className="text-sm text-red-500">{ticket.status}</div> */}
                <div className="text-gray-300 mt-2">{ticket.description}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketInfo;
