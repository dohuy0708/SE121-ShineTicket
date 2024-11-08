// src/components/EventInfo.js
import React from "react";
import BigTicket from "../../components/BigTicket";
import EventSection from "../../components/EventSection ";
import TicketInfo from "../../components/TicketInfo";

const TicketDetails = () => {
  const specialEvents = [
    {
      name: "Sân khấu Thiên Đàng",
      price: "330.000đ",
      date: "26 tháng 09, 2024",
    },
    {
      name: "Sân khấu Thiên Đàng: Ngũ quý Tương phùng",
      price: "330.000đ",
      date: "26 tháng 09, 2024",
    },
    {
      name: "Sân khấu Thiên Đàng: Ngũ quý Tương phùng Ngũ quý Tương phùng Ngũ quý Tương phùng",
      price: "330.000đ",
      date: "26 tháng 09, 2024",
    },
    {
      name: "Sân khấu Thiên Đàng: quý Tương phùng ",
      price: "330.000đ",
      date: "26 tháng 09, 2024",
    },
    // Các sự kiện khác
  ];
  return (
    <div className="bg-bg-main ">
      <div className="mx-auto max-w-7xl p-4">
        <BigTicket />
        <div>
          <TicketInfo />
          Có thể bạn cũng thích
          <EventSection events={specialEvents} />
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
