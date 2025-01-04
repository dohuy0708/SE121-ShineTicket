// src/components/EventSection.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
const EventSection = ({ title, events }) => {
  const navigate = useNavigate();

  const handleCardClick = (eventId) => {
    // Điều hướng đến trang TicketDetails, bạn có thể thêm eventId vào đường dẫn nếu cần
    navigate(`/ticket-details/${eventId}`);
  };
  return (
    <section className="event-section text-white text-[15px] my-[50px]">
      <div className="event-header flex justify-between p-[5px]">
        <div className="event-type text-lg mb-3 cursor-pointer font-bold">
          {title}
        </div>
        <div className="more cursor-pointer text-[#8c94a1]">Xem thêm</div>
      </div>
      <div className="events flex flex-wrap w-full">
        {events.map((event, index) => (
          <div
            className="event-card w-1/4 p-[5px] cursor-pointer"
            key={index}
            onClick={() => handleCardClick(event?._id)}
          >
            <div className="event-image bg-gray-300 h-[175px] rounded-lg mb-[10px] overflow-hidden">
              <img
                src={`http://localhost:8080/images/${event?.cover_image_url}`}
                alt={event?.event_name}
                className="w-full h-full object-cover "
              />
            </div>
            <div className="event-info flex flex-col gap-2">
              <div className="event-name w-full overflow-hidden text-ellipsis whitespace-nowrap leading-[21px]  font-semibold uppercase">
                {event?.event_name}
              </div>
              <div className="event-price text-primary font-semibold">
                Từ {event?.lowest_price?.toLocaleString()} đ
              </div>

              <div className="event-date flex-1 flex items-center">
                {" "}
                <CalendarDaysIcon className="text-white inline w-5 bg-transparent mr-2" />
                {new Date(event?.start_date).toLocaleDateString("vi-VN", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventSection;
