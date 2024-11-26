import React from "react";

const EventDetailsModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <h2 className="text-2xl font-bold mb-4">{event.name}</h2>
        <p>
          <strong>Ngày kết thúc:</strong> {event.endDate}
        </p>
        <p>
          <strong>Trạng thái:</strong> {event.paymentStatus}
        </p>
        <p>
          <strong>Mô tả:</strong> {event.description}
        </p>
        <p>
          <strong>Số tiền cần thanh toán:</strong> {event.paymentAmount} VND
        </p>
        <p>
          <strong>Thông tin thanh toán:</strong> {event.paymentInfo}
        </p>
        <hr className="my-4" />
        <div className="mt-4 text-right">
          <button
            className="bg-gray-300 px-4 py-2 rounded-lg mr-2"
            onClick={onClose}
          >
            Đóng
          </button>
          {event.paymentStatus === "Chưa thanh toán" && (
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
              onClick={() => {
                onClose();
                alert(`Thanh toán cho sự kiện ${event.name} đã hoàn tất!`);
              }}
            >
              Thanh toán
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetailsModal;
