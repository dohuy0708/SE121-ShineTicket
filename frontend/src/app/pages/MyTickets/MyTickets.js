import React, { useState } from "react";
import TicketCard from "./Partials/TicketCard";
export default function MyTickets() {
  const [activeFilter, setActiveFilter] = useState("Sắp diễn ra");

  // Các trạng thái vé
  const ticketState = ["Tất cả", "Sắp diễn ra", "Đã kết thúc"];

  // Dữ liệu vé mẫu
  const tickets = [
    {
      id: 1,
      eventName: "Hòa nhạc mùa xuân",
      eventDate: "24/11/2024",
      venue: "Nhà hát lớn Hà Nội",
      ticketType: "VIP",
      ticketCode: "HN12345VIP",
      price: "1.500.000",
      status: "upcoming", // Sắp diễn ra
    },
    {
      id: 2,
      eventName: "Kịch nghệ mùa đông",
      eventDate: "18/10/2024",
      venue: "Rạp chiếu phim Galaxy",
      ticketType: "Standard",
      ticketCode: "KD45678STD",
      price: "800.000",
      status: "ended", // Đã kết thúc
    },
    {
      id: 3,
      eventName: "Liên hoan âm nhạc",
      eventDate: "30/11/2024",
      venue: "Sân vận động Mỹ Đình",
      ticketType: "VIP",
      ticketCode: "MD45698SPL",
      price: "2.000.000",
      status: "upcoming", // Sắp diễn ra
    },
  ];

  // Lọc vé theo trạng thái
  const filteredTickets = tickets.filter((ticket) => {
    if (activeFilter === "Tất cả") return true;
    if (activeFilter === "Sắp diễn ra") return ticket.status === "upcoming";
    if (activeFilter === "Đã kết thúc") return ticket.status === "ended";
    return false;
  });

  return (
    <div className="flex-1 bg-black mx-auto">
      {/* Header */}
      <div className="flex items-center text-2xl pl-4 h-16 bg-bg-main border-b-2 border-[#A19393] font-semibold text-white mb-4">
        Vé đã mua
      </div>

      {/* Bộ lọc trạng thái */}
      <div className="flex gap-x-2 w-full px-4 mb-4">
        {ticketState.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-1 rounded-3xl ${
              activeFilter === filter
                ? "bg-primary text-black"
                : "bg-white text-black"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Danh sách vé */}
      <div className="grid grid-cols-1 gap-4 px-4">
        {filteredTickets.length > 0 ? (
          filteredTickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))
        ) : (
          <p className="text-gray-400">Không có vé phù hợp.</p>
        )}
      </div>
    </div>
  );
}
