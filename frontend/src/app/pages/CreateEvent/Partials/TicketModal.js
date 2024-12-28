import React, { useState, useEffect } from "react";

function TicketModal({ ticket, onSave, onClose, index }) {
  const [ticketData, setTicketData] = useState({
    ticket_type: "",
    price: 0,
    ticket_des: "",
    ticket_quantity: 0,
    event_datetime: "",
  });

  useEffect(() => {
    if (ticket) {
      setTicketData(ticket); // Nếu sửa vé, điền thông tin vé vào form
    }
  }, [ticket]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicketData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    if (
      !ticketData.ticket_type ||
      !ticketData.price ||
      !ticketData.ticket_quantity ||
      !ticketData.event_datetime
    ) {
      alert("Vui lòng điền đầy đủ thông tin");
      return;
    }
    onSave(ticketData, index); // Lưu thông tin vé
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-bg-main p-6 rounded w-[70%] relative">
        <div
          className="absolute top-1 right-5 cursor-pointer p-1 text-red-600 text-2xl"
          onClick={onClose}
        >
          x
        </div>
        <h2 className="text-xl text-white text-center font-semibold mb-4">
          {ticket ? "Chỉnh sửa vé" : "Tạo loại vé mới"}
        </h2>
        <div className="grid grid-cols-3 gap-x-3 mb-6">
          <label className="text-white">
            <span className="text-[#C83030] font-bold text-lg">* </span> Tên vé
            <br />
            <input
              type="text"
              name="ticket_type"
              value={ticketData.ticket_type}
              onChange={handleChange}
              className="w-full text-black p-2 bg-white mt-2 border border-gray-600 rounded"
            />
          </label>
          <label className="text-white">
            <span className="text-[#C83030] font-bold text-lg">* </span> Giá vé
            <br />
            <input
              type="number"
              name="price"
              value={ticketData.price}
              onChange={handleChange}
              className="w-full text-black p-2 bg-white mt-2 border border-gray-600 rounded"
            />
          </label>
          <label className="text-white">
            <span className="text-[#C83030] font-bold text-lg">* </span> Tổng số
            vé
            <br />
            <input
              type="number"
              name="ticket_quantity"
              value={ticketData.ticket_quantity}
              onChange={handleChange}
              className="w-full text-black p-2 bg-white mt-2 border border-gray-600 rounded"
            />
          </label>
        </div>

        <div className="grid grid-cols-2 gap-x-4 mb-6">
          <label className="text-white">
            <span className="text-[#C83030] font-bold text-lg">* </span> Ngày
            bắt đầu hiệu lực
            <br />
            <input
              type="date"
              name="event_datetime"
              value={ticketData.event_datetime}
              onChange={handleChange}
              className="w-full text-black p-2 bg-white mt-2 border border-gray-600 rounded"
            />
          </label>
        </div>

        <label className="text-white">
          <span className="text-[#C83030] font-bold text-lg">* </span> Thông tin
          vé
          <br />
          <textarea
            name="ticket_des"
            value={ticketData.ticket_des}
            onChange={handleChange}
            className="w-full text-black p-2 bg-white mt-2 border border-gray-600 rounded"
          ></textarea>
        </label>

        <div className="flex justify-end mt-4">
          <button
            onClick={handleSave}
            className="px-4 py-2 w-full bg-primary text-lg text-white font-semibold rounded"
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
}

export default TicketModal;
