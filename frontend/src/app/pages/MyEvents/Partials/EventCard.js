import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  useEffect(() => {}, []);

  // Hàm xác định trạng thái và màu nền
  const getStatusDetails = (statusId) => {
    const statusMap = {
      "676ece5d50c4e95732edbadd": {
        label: "Chờ duyệt",
        bgColor: "bg-yellow-400",
      },
      "675ea25872e40e87eb7dbf08": {
        label: "Sắp diễn ra",
        bgColor: "bg-green-400",
      },
      "675ea24172e40e87eb7dbf06": {
        label: "Đang diễn ra",
        bgColor: "bg-blue-400",
      },
      "675ea26172e40e87eb7dbf0a": {
        label: "Đã kết thúc",
        bgColor: "bg-gray-400",
      },
      "676ece8250c4e95732edbadf": { label: "Đã hủy", bgColor: "bg-red-400" },
    };
    return (
      statusMap[statusId] || { label: "Không xác định", bgColor: "bg-gray-200" }
    );
  };

  const { label, bgColor } = getStatusDetails(event?.event_status_id);

  return (
    <div className="bg-bg-main p-4 rounded-lg text-white m-6">
      <div className="flex justify-between border-b-2 border-white pb-6">
        <div className="flex">
          <div className="w-72 bg-gray-500 h-[9.5rem] rounded-lg">
            <img
              src={`http://localhost:8080/images/${event?.cover_image_url}`}
              className="w-full h-full object-cover"
              alt={event?.event_name}
            />
          </div>
          <div className="ml-4 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold">{event?.event_name}</h3>
              <p className="text-md mt-4 text-primary">
                📅{" "}
                {new Date(event.start_date).toLocaleDateString("vi-VN", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </p>
              <p className="text-md mt-2 text-primary">
                📍{" "}
                {event?.event_format === "offline"
                  ? event?.venue_id?.venue_name
                  : "Sự kiện online"}
              </p>
            </div>
          </div>
        </div>
        <div
          className={`${bgColor} h-8 px-2 mr-[-16px] flex justify-center items-center rounded-s-md`}
        >
          {label}
        </div>
      </div>
      <div className="mt-4 max-w-xl mx-auto ">
        <div className="flex justify-around text-sm text-center text-white">
          <span className="cursor-pointer font-semibold hover:text-primary">
            <Link to={`/summary/${event._id}`}>Tổng kết</Link>
          </span>
          {/* <span className="cursor-pointer font-semibold hover:text-primary">
            <Link to="/create-event">Chỉnh sửa</Link>
          </span> */}
          <span className="cursor-pointer font-semibold hover:text-primary">
            <Link to={`/orders/${event._id}`}>Đơn hàng</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
