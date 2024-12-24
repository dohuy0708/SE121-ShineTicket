import React, { useEffect, useState } from "react";
import TicketModal from "./TicketModal";
import { TicketIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { sEvent2 } from "../eventStore";

function Performance() {
  const eventInfo = sEvent2.use();
  const tickets = sEvent2.slice((n) => n.tickets).use();
  const [showModal, setShowModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null); // Thêm state để lưu vé cần chỉnh sửa
  const [ticketIndex, setTicketIndex] = useState(-1); // Thêm state để lưu vé cần chỉnh sửa

  useEffect(() => {
    console.log(tickets);
  });
  // Hàm thêm vé vào danh sách vé
  const handleAddTicket = (newTicket) => {
    sEvent2.set(
      (prev) => (prev.value.tickets = [...prev.value.tickets, newTicket])
    );
  };

  // Hàm chỉnh sửa vé trong danh sách
  const handleEditTicket = (updatedTicket, ticketIndex) => {
    sEvent2.set(
      (prev) =>
        (prev.value.tickets = prev.value.tickets.map((ticket, index) =>
          index === ticketIndex ? updatedTicket : ticket
        ))
    );
  };

  return (
    <div className="p-4 mb-4 border border-primary rounded-xl bg-bg-main">
      <h4 className="text-lg text-white font-semibold mb-2">
        {eventInfo.event_name}
      </h4>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <label className="text-white">
          Thời gian bắt đầu
          <br />
          <input
            type="date"
            placeholder="Thời gian bắt đầu"
            className="w-full p-2 mt-2 text-black bg-white border border-gray-600 rounded"
            value={eventInfo.start_date}
            onChange={(e) =>
              sEvent2.set((prev) => (prev.value.start_date = e.target.value))
            }
          />
        </label>
        <label className="text-white">
          Thời gian kết thúc
          <br />
          <input
            type="date"
            placeholder="Thời gian kết thúc"
            className="w-full p-2 mt-2 text-black bg-white border border-gray-600 rounded"
            value={eventInfo.end_date}
            onChange={(e) =>
              sEvent2.set((prev) => (prev.value.end_date = e.target.value))
            }
          />
        </label>
        <label className="text-white">
          Thời gian bắt đầu bán vé
          <br />
          <input
            type="date"
            placeholder="Thời gian bắt đầu"
            className="w-full p-2 mt-2 text-black bg-white border border-gray-600 rounded"
            value={eventInfo.start_sell_date}
            onChange={(e) =>
              sEvent2.set(
                (prev) => (prev.value.start_sell_date = e.target.value)
              )
            }
          />
        </label>
        <label className="text-white">
          Thời gian kết thúc bán vé
          <br />
          <input
            type="date"
            placeholder="Thời gian kết thúc"
            className="w-full p-2 mt-2 text-black bg-white border border-gray-600 rounded"
            value={eventInfo.end_sell_date}
            onChange={(e) =>
              sEvent2.set((prev) => (prev.value.end_sell_date = e.target.value))
            }
          />
        </label>
      </div>
      <div>
        {tickets.map((ticket, ticketIndex) => (
          <div
            key={ticketIndex}
            className="p-2 mt-2 bg-[#414652] text-white border border-gray-600 rounded flex justify-between items-center"
          >
            <div className="flex items-center">
              <TicketIcon className="h-6 inline mr-2" />
              {ticket.ticket_type}
            </div>
            <div>
              <button
                onClick={() => {
                  setSelectedTicket(ticket); // Lưu vé để sửa
                  setTicketIndex(ticketIndex); // Lưu vé để sửa
                  setShowModal(true); // Hiển thị modal
                }}
                className="text-black mr-2 rounded-md bg-white h-7 w-7 text-center"
              >
                <PencilIcon className="mx-auto h-5" />
              </button>
              <button
                onClick={() =>
                  sEvent2.set((prev) => ({
                    ...prev.value,
                    tickets: tickets.filter((_, idx) => idx !== ticketIndex),
                  }))
                }
                className="text-white rounded-md bg-red-600 h-7 w-7 text-center"
              >
                <TrashIcon className="mx-auto h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex text-center justify-center">
        <button
          onClick={() => {
            setSelectedTicket(null); // Khi tạo mới, không có vé nào chọn
            setTicketIndex(-1); // Khi tạo mới, không có vé nào chọn
            setShowModal(true); // Hiển thị modal
          }}
          className="mt-4 px-4 py-2 bg-transparent text-primary font-semibold"
        >
          <span className="rounded-2xl text-center mr-2 text-black px-1.5 pb-0.5 bg-primary">
            +
          </span>
          Tạo loại vé mới
        </button>
      </div>

      {/* Modal Tạo loại vé */}
      {showModal && (
        <TicketModal
          ticket={selectedTicket} // Truyền thông tin vé nếu sửa
          onSave={(ticket) => {
            if (selectedTicket) {
              handleEditTicket(ticket, ticketIndex); // Sửa vé nếu có thông tin
            } else {
              handleAddTicket(ticket); // Thêm vé mới
            }
            setShowModal(false); // Đóng modal
          }}
          onClose={() => setShowModal(false)} // Đóng modal khi click nút đóng
          index={ticketIndex}
        />
      )}
    </div>
  );
}

export default Performance;
