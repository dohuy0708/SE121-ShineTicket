import React, { useState, useEffect } from "react";
import TicketCard from "./Partials/TicketCard";
import { getMyTickets } from "./services/ticketService";

export default function MyTickets() {
  const [activeFilter, setActiveFilter] = useState("Sắp diễn ra");
  const [loading, setLoading] = useState(true); // Trạng thái loading
  const [tickets, setTickets] = useState([]);
  const [filterTickets, setFilterTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      setLoading(true); // Bắt đầu tải
      try {
        const userId = localStorage.getItem("user_id");
        const tickets = await getMyTickets(userId);
        setTickets(tickets);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      } finally {
        setLoading(false); // Hoàn tất tải
      }
    };
    fetchTickets();
  }, []);

  // Lọc vé theo trạng thái
  useEffect(() => {
    const now = new Date();
    const filtered = tickets.filter((ticket) => {
      const ticketDate = new Date(ticket.ticket_date);
      const ticketEndDate = new Date(ticket.ticket_end_date);

      if (activeFilter === "Tất cả") return true;
      if (activeFilter === "Sắp diễn ra") return ticketDate > now;
      if (activeFilter === "Đang diễn ra")
        return ticketDate <= now && ticketEndDate >= now;
      if (activeFilter === "Đã kết thúc") return ticketEndDate < now;

      return false;
    });
    setFilterTickets(filtered);
  }, [activeFilter, tickets]);

  // Các trạng thái vé
  const ticketState = ["Tất cả", "Sắp diễn ra", "Đang diễn ra", "Đã kết thúc"];

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
        {loading ? (
          <p className="text-gray-400">Đang tải dữ liệu...</p>
        ) : filterTickets.length > 0 ? (
          filterTickets.map((ticket) => (
            <TicketCard key={ticket?.ticket_id} ticket={ticket} />
          ))
        ) : (
          <p className="text-gray-400">Không có vé phù hợp.</p>
        )}
      </div>
    </div>
  );
}
