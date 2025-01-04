import React from "react";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

export default function EventCard({ event, onClick }) {
  return (
    <div
      className="event-card w-full p-[5px] cursor-pointer"
      key={event._id}
      onClick={onClick(event._id)}
    >
      <div className=" bg-gray-200 h-[175px] rounded-lg mb-[10px]">
        <image
          src={`http://localhost/8080/images/${event.logo_url}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="event-info flex flex-col gap-2">
        <div className="event-name w-full overflow-hidden text-ellipsis whitespace-nowrap leading-[21px] font-semibold uppercase">
          {<h2 className="text-lg font-medium">{event.event_name}</h2>}
        </div>
        <div className="event-price text-primary font-semibold">
          Từ: {event?.ticketPrice?.toLocaleString()} đ
        </div>
        <div className="event-date flex-1 flex items-center">
          {" "}
          <CalendarDaysIcon className="text-white inline w-5 bg-transparent mr-2" />
          {new Date(event.start_date).toLocaleDateString("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </div>
      </div>
    </div>
  );
}
