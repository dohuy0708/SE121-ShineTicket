import React, { useState } from "react";
import PaymentEventList from "./Partials/PaymentEventList";
import EventDetailsModal from "./Partials/EventDetailsModal";

export default function Pay() {
  const [events, setEvents] = useState([
    {
      name: "Sự kiện A",
      endDate: "2024-11-30",
      paymentAmount: 100000,
      paymentInfo: "Ngân hàng ABC, số tài khoản: 123456",
      paymentStatus: "Chưa thanh toán",
      description: "Mô tả sự kiện A",
    },
    {
      name: "Sự kiện B",
      endDate: "2024-11-20",
      paymentAmount: 200000,
      paymentInfo: "Ví điện tử XYZ",
      paymentStatus: "Chưa thanh toán",
      description: "Mô tả sự kiện B",
    },
    {
      name: "Sự kiện C",
      endDate: "2024-11-10",
      paymentAmount: 150000,
      paymentInfo: "Ngân hàng XYZ, số tài khoản: 654321",
      paymentStatus: "Đã thanh toán",
      description: "Mô tả sự kiện C",
    },
  ]);

  const [filteredEvents, setFilteredEvents] = useState(events);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handlePay = (event) => {
    // Xử lý thanh toán cho sự kiện
    console.log(`Thanh toán cho sự kiện: ${event.name}`);
    // Sau khi thanh toán thành công, cập nhật lại trạng thái thanh toán
    const updatedEvents = events.map((e) =>
      e.name === event.name ? { ...e, paymentStatus: "Đã thanh toán" } : e
    );
    setEvents(updatedEvents);
    setFilteredEvents(updatedEvents); // Cập nhật danh sách sự kiện sau khi thanh toán
  };

  const handleViewDetails = (event) => {
    setSelectedEvent(event);
  };

  const handleSearch = (searchTerm) => {
    const filtered = events.filter((event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Các sự kiện chờ thanh toán</h1>
      <PaymentEventList
        events={filteredEvents}
        onPay={handlePay}
        onViewDetails={handleViewDetails}
        onSearch={handleSearch}
      />
      <EventDetailsModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
}
