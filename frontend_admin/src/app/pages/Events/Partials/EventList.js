import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";

const EventList = ({ events, onViewDetails }) => {
  const statusColorMap = {
    "676ece5d50c4e95732edbadd": "text-yellow-500", // Chờ duyệt
    "675ea25872e40e87eb7dbf08": "text-blue-500", // Sắp diễn ra
    "675ea24172e40e87eb7dbf06": "text-green-500", // Đang diễn ra
    "675ea26172e40e87eb7dbf0a": "text-red-500", // Đã kết thúc
    "676ece8250c4e95732edbadf": "text-gray-500", // Đã hủy
  };
  const statusTextMap = {
    "676ece5d50c4e95732edbadd": "Chờ duyệt",
    "675ea25872e40e87eb7dbf08": "Sắp diễn ra",
    "675ea24172e40e87eb7dbf06": "Đang diễn ra",
    "675ea26172e40e87eb7dbf0a": "Đã kết thúc",
    "676ece8250c4e95732edbadf": "Đã hủy",
  };

  return (
    <div className="bg-white shadow-md rounded-lg mt-4">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2 text-left">Tên sự kiện</th>
            <th className="px-4 py-2 text-left">Bắt đầu</th>
            <th className="px-4 py-2 text-left">Kết thúc</th>
            <th className="px-4 py-2 text-left">Trạng thái</th>
            <th className="px-4 py-2 text-center"></th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={event._id} className="hover:bg-gray-50">
              <td className="px-4 py-2">{event?.event_name}</td>
              <td className="px-4 py-2">
                {" "}
                {new Date(event?.start_date).toLocaleDateString("vi-VN", {
                  imeZone: "UTC",
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </td>
              <td className="px-4 py-2">
                {new Date(event?.end_date).toLocaleDateString("vi-VN", {
                  imeZone: "UTC",
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </td>
              <td
                className={`px-4 py-2 font-semibold ${
                  statusColorMap[event?.event_status_id] || "text-gray-500"
                }`}
              >
                {statusTextMap[event?.event_status_id] || "Không xác định"}
              </td>

              <td className="px-4 py-2 text-center">
                <button
                  className="text-blue-500 hover:underline flex items-center justify-center"
                  onClick={() => onViewDetails(event)}
                >
                  <EyeIcon className="h-6 text-black hover:text-primary" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventList;
