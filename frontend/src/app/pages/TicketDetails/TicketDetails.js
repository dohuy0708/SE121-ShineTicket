// src/components/EventInfo.js
import React from "react";
import BigTicket from "./Partials/BigTicket";
import EventSection from "../../components/EventSection ";
import TicketInfo from "./Partials/TicketInfo";
import { useLocation } from "react-router-dom";
import EventInfo from "./Partials/EventInfo";

const TicketDetails = () => {
  const location = useLocation();
  const { event } = location.state || {};
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
        <BigTicket event={event} />
        <div>
          <EventInfo />
          <TicketInfo event={event} />
          Có thể bạn cũng thích
          <EventSection events={specialEvents} />
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
