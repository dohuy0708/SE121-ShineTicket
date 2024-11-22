// src/components/EventSection.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
const EventSection = ({ events }) => {
  const navigate = useNavigate();

  const handleCardClick = (eventId) => {
    // Điều hướng đến trang TicketDetails, bạn có thể thêm eventId vào đường dẫn nếu cần
    navigate(`/TicketDetails`);
  };
  return (
    <section className="event-section text-white text-[15px] my-[50px]">
      <div className="event-header flex justify-between p-[5px]">
        <div className="event-type mb-[15px] cursor-pointer font-bold">
          Sự kiện
        </div>
        <div className="more cursor-pointer text-[#8c94a1]">Xem thêm</div>
      </div>
      <div className="events flex flex-wrap w-full">
        {events.map((event, index) => (
          <div
            className="event-card w-1/4 p-[5px] cursor-pointer"
            key={index}
            onClick={() => handleCardClick()}
          >
            <div className="event-image bg-gray-300 h-[175px] rounded-lg mb-[10px]"></div>
            <div className="event-info flex flex-col gap-2">
              <div className="event-name w-full overflow-hidden text-ellipsis whitespace-nowrap leading-[21px]  font-semibold uppercase">
                {event.name}
              </div>
              <div className="event-price text-primary font-semibold">
                Từ {event.price}
              </div>

              <div className="event-date flex-1 flex items-center">
                {" "}
                <CalendarDaysIcon className="text-white inline w-5 bg-transparent mr-2" />
                {event.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventSection;
