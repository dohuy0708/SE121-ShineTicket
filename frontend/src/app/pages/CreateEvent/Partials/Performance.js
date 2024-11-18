import React, { useState } from "react";
import TicketModal from "./TicketModal";

function Performance({ index, onDelete }) {
  const [tickets, setTickets] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Hàm thêm vé vào danh sách vé
  const handleAddTicket = (newTicket) => {
    setTickets([...tickets, newTicket]);
  };

  return (
    <div className="p-4 mb-4 border border-yellow-500 rounded-xl bg-bg-main relative">
      <div
        className="absolute top-1 right-5 cursor-pointer font-semibold p-1 text-red-600 text-2xl"
        onClick={onDelete}
      >
        x
      </div>
      <h4 className="text-lg text-white font-semibold mb-2">Ngày sự kiện</h4>
      <div className="grid grid-cols-2 space-x-4 mb-4">
        <label className="text-white">
          Thời gian bắt đầu
          <br />
          <input
            type="text"
            placeholder="Thời gian bắt đầu"
            className="w-full p-2 mt-2 text-black bg-white border border-gray-600 rounded"
          />
        </label>
        <label className="text-white">
          Thời gian kết thúc
          <br />
          <input
            type="text"
            placeholder="Thời gian kết thúc"
            className="w-full p-2 mt-2 text-black bg-white border border-gray-600 rounded"
          />
        </label>
      </div>
      <div>
        {tickets.map((ticket, ticketIndex) => (
          <div
            key={ticketIndex}
            className="p-2 mt-2 bg-[#414652] text-white border border-gray-600 rounded flex justify-between items-center"
          >
            <span>{ticket.name}</span>
            <div>
              <button
                onClick={() => setShowModal(true)}
                className="text-yellow-500 mr-2"
              >
                Chỉnh sửa
              </button>
              <button
                onClick={() =>
                  setTickets(tickets.filter((_, idx) => idx !== ticketIndex))
                }
                className="text-red-500"
              >
                Xóa
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex text-center justify-center">
        <button
          onClick={() => setShowModal(true)}
          className="mt-4 px-4 py-2 bg-transparent text-primary font-semibold "
        >
          <span className=" rounded-2xl  text-center mr-2  text-black px-1.5 pb-0.5  bg-primary">
            +
          </span>
          Tạo loại vé mới
        </button>
      </div>

      {/* Modal Tạo loại vé */}
      {showModal && (
        <TicketModal
          onSave={(ticket) => {
            handleAddTicket(ticket);
            setShowModal(false);
          }}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default Performance;
