import React, { useState } from "react";

function TicketModal({ onSave, onClose }) {
  const [ticketData, setTicketData] = useState({
    name: "",
    price: "",
    totalTickets: "",
    minPerOrder: "",
    maxPerOrder: "",
    saleStartTime: "",
    saleEndTime: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicketData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    onSave(ticketData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#515158] p-6 rounded w-[80%] relative">
        <div
          className="absolute top-1 right-5 cursor-pointer p-1 text-white text-2xl"
          onClick={onClose}
        >
          x
        </div>
        <h2 className="text-xl text-white text-center font-semibold mb-4">
          Tạo loại vé mới
        </h2>
        <div className="">
          <div className="grid grid-cols-2 gap-x-3 mb-6">
            <label className="text-white">
              <span className="text-[#C83030] font-bold text-lg">* </span> Tên
              vé
              <br />
              <input
                type="text"
                name="name"
                value={ticketData.name}
                onChange={handleChange}
                className="w-full  text-black p-2 bg-white mt-2 border border-gray-600 rounded"
              />
            </label>
            <label className="text-white">
              <span className="text-[#C83030] font-bold text-lg">* </span> Giá
              vé{" "}
              {/* <label className="text-white">
                  {" "}
                  <input
                    type="checkbox"
                    name="isFree"
                    onChange={(e) =>
                      setTicketData((prev) => ({
                        ...prev,
                        price: e.target.checked ? "0" : prev.price,
                      }))
                    }
                  />
                  Miễn phí
                </label> */}
              <br />
              <input
                type="text"
                name="price"
                value={ticketData.price}
                onChange={handleChange}
                className="w-full  text-black p-2 bg-white mt-2 border border-gray-600 rounded"
              />
            </label>
          </div>
          <div className="grid grid-cols-3  gap-x-4 mb-6">
            <label className="text-white col-span-1">
              <span className="text-[#C83030] font-bold text-lg">* </span> Tổng
              số vé
              <br />
              <input
                type="text"
                name="totalTickets"
                value={ticketData.totalTickets}
                onChange={handleChange}
                className="w-full  text-black p-2 bg-white mt-2 border border-gray-600 rounded"
              />
            </label>
            <label className="text-white col-span-1">
              <span className="text-[#C83030] font-bold text-lg">* </span> Số vé
              tối thiểu 1 đơn
              <br />
              <input
                type="text"
                name="minPerOrder"
                value={ticketData.minPerOrder}
                onChange={handleChange}
                className="w-full  text-black p-2 bg-white mt-2 border border-gray-600 rounded"
              />
            </label>
            <label className="text-white col-span-1">
              <span className="text-[#C83030] font-bold text-lg">* </span> Số vé
              tối đa 1 đơn
              <br />
              <input
                type="text"
                name="maxPerOrder"
                value={ticketData.maxPerOrder}
                onChange={handleChange}
                className="w-full  text-black p-2 bg-white mt-2 border border-gray-600 rounded"
              />
            </label>
          </div>
          <div className="grid grid-cols-2  gap-x-4 mb-6">
            <label className="text-white col-span-1 ">
              <span className="text-[#C83030] font-bold text-lg">* </span> Thời
              gian bắt đầu bán vé
              <br />
              <input
                type="text"
                name="saleStartTime"
                value={ticketData.saleStartTime}
                onChange={handleChange}
                className="w-full  text-black p-2 bg-white mt-2 border border-gray-600 rounded"
              />
            </label>
            <label className="text-white col-span-1">
              <span className="text-[#C83030] font-bold text-lg">* </span> Thời
              gian kết thúc bán vé
              <br />
              <input
                type="text"
                name="saleEndTime"
                value={ticketData.saleEndTime}
                onChange={handleChange}
                className="w-full  text-black p-2 bg-white mt-2 border border-gray-600 rounded"
              />
            </label>
          </div>
          <label className="text-white">
            <span className="text-[#C83030] font-bold text-lg">* </span> Thông
            tin vé
            <br />
            <textarea
              name="description"
              value={ticketData.description}
              onChange={handleChange}
              className="w-full  text-black p-2 bg-white mt-2 border border-gray-600 rounded"
            ></textarea>
          </label>
        </div>
        <div className="flex justify-end mt-4">
          {/* <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded mr-2"
          >
            Đóng
          </button> */}
          <button
            onClick={handleSave}
            className="px-4 py-2 w-full bg-yellow-500 text-lg text-white font-semibold rounded"
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
}

export default TicketModal;
