import React from "react";

const EventDetailsModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <h2 className="text-2xl font-bold mb-4">{event.name}</h2>
        <p>
          <strong>Thể loại:</strong> {event.category}
        </p>
        <p>
          <strong>Ngày:</strong> {event.date}
        </p>
        <p>
          <strong>Trạng thái:</strong> {event.status}
        </p>
        <p>
          <strong>Mô tả:</strong> {event.description}
        </p>
        <div className="mt-4 text-right">
          <button
            className="bg-gray-300 px-4 py-2 rounded-lg mr-2"
            onClick={onClose}
          >
            Đóng
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
            Duyệt
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsModal;
