import React from "react";
import { setRejectEvent, setWillOccureEvent } from "../services/eventService";

const EventDetailsModal = ({ event, onClose, refreshData }) => {
  if (!event) return null;

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

  const onApprove = async (id) => {
    try {
      await setWillOccureEvent(id);
      //  event?.event_status_id="675ea24172e40e87eb7dbf06"
      refreshData();
      onClose();
    } catch (error) {
      console.error("Lỗi khi duyệt sự kiện:", error);
      alert("Không thể từ chối sự kiện. Vui lòng thử lại!");
    }
  };
  const onReject = async (id) => {
    try {
      await setRejectEvent(id);
      //   event.event_status_id="676ece8250c4e95732edbadf"
      onClose();
      refreshData();
    } catch (error) {
      console.error("Lỗi khi từ chối sự kiện:", error);
      alert("Không thể từ chối sự kiện. Vui lòng thử lại!");
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 max-w-4xl">
        {/* Header với logo và tên sự kiện */}
        <div className="flex items-center mb-6">
          {event?.logo_url && (
            <img
              src={event?.logo_url}
              alt={event?.event_name}
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
          )}
          <h2 className="text-3xl font-bold text-gray-800">
            {event?.event_name}
          </h2>
        </div>

        {/* Phần mô tả */}
        <div className="mb-4">
          <p className="text-gray-600">{event?.description}</p>
        </div>

        {/* Thông tin chi tiết sự kiện */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p>
              <strong>Thể loại:</strong>{" "}
              {event?.event_type_id?.type_name || "Không rõ"}
            </p>
            <p>
              <strong>Hình thức:</strong>{" "}
              {event?.event_format === "offline" ? "Trực tiếp" : "Trực tuyến"}
            </p>
            <p>
              <strong>Trạng thái:</strong>{" "}
              {event?.event_status_id?.status_name || "Không rõ"}
            </p>
            <p>
              <strong>Ngày bắt đầu:</strong> {formatDate(event?.start_date)}
            </p>
            <p>
              <strong>Ngày kết thúc:</strong> {formatDate(event?.end_date)}
            </p>
          </div>
          <div>
            <p>
              <strong>Địa điểm:</strong>{" "}
              {`${event?.venue_id?.venue_name}, ${event?.venue_id?.street_name}, ${event?.venue_id?.ward}, ${event?.venue_id?.district}, ${event?.venue_id?.city}`}
            </p>
            <p>
              <strong>Tổng vé:</strong> {event?.total_tickets}
            </p>
            <p>
              <strong>Vé còn:</strong> {event?.available_tickets}
            </p>
          </div>
        </div>

        {/* Thông tin nhà tổ chức */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Thông tin nhà tổ chức</h3>
          <p>
            <strong>Tên:</strong>{" "}
            {event?.organizer_id?.organizer_name || "Không rõ"}
          </p>
          <p>
            <strong>Email:</strong>{" "}
            {event?.organizer_id?.organizer_email || "Không rõ"}
          </p>
          <p>
            <strong>Số điện thoại:</strong>{" "}
            {event?.organizer_id?.organizer_phone_number || "Không rõ"}
          </p>
          <p>
            <strong>Tài khoản ngân hàng:</strong>{" "}
            {`${event?.organizer_id?.account_number || "Không rõ"} tại ${
              event?.organizer_id?.bank_name || "Không rõ"
            }`}
          </p>
        </div>

        {/* Danh sách vé */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Thông tin vé</h3>
          <div className="space-y-2">
            {event?.tickets?.map((ticket, index) => (
              <div
                key={ticket.id}
                className="p-4 bg-gray-100 rounded-lg flex justify-between items-center"
              >
                <div>
                  <p>
                    <strong>Loại vé:</strong> {ticket.ticketType}
                  </p>
                  <p>
                    <strong>Giá:</strong> {ticket.price.toLocaleString()} VND
                  </p>
                  <p>
                    <strong>Số lượng:</strong> {ticket.quantity}
                  </p>
                  <p>
                    <strong>Mô tả:</strong> {ticket.description}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Trạng thái:</strong> {ticket.status}
                  </p>
                  <p>
                    <strong>Thời gian:</strong> {formatDate(ticket.datetime)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nút hành động */}
        <div className="flex justify-end">
          <button
            className="bg-gray-300 px-4 py-2 rounded-lg mr-2 hover:bg-gray-400"
            onClick={onClose} // Hàm xử lý nút Đóng
          >
            Đóng
          </button>
          {event?.event_status_id === "676ece5d50c4e95732edbadd" && (
            <>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-green-600"
                onClick={() => onApprove(event._id)} // Hàm xử lý nút Duyệt
              >
                Duyệt
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                onClick={() => onReject(event._id)} // Hàm xử lý nút Từ chối
              >
                Từ chối
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetailsModal;
