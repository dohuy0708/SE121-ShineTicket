import React from "react";

const EventList = ({ events, onViewDetails }) => {
  return (
    <div className="bg-white shadow-md rounded-lg mt-4">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2 text-left">Tên sự kiện</th>
            <th className="px-4 py-2 text-left">Thể loại</th>
            <th className="px-4 py-2 text-left">Ngày</th>
            <th className="px-4 py-2 text-left">Trạng thái</th>
            <th className="px-4 py-2 text-center">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2">{event?.event_name}</td>
              <td className="px-4 py-2">{event?.category}</td>
              <td className="px-4 py-2">
                {new Date(event?.start_date).toLocaleDateString("vi-VN", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </td>
              <td className="px-4 py-2">{event?.status}</td>
              <td className="px-4 py-2 text-center">
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => onViewDetails(event)}
                >
                  Xem chi tiết
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
