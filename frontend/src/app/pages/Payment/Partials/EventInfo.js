import React from "react";

const EventInfo = ({ event }) => {
  return (
    <div className=" text-white  rounded-lg w-full space-y-3">
      <p className="text-2xl font-bold font-inter leading-[150%] overflow-hidden break-words pb-4 mr-6 mb-4 border-b-2 border-white">
        {event.name}
      </p>

      <h2 className="font-bold text-base  text-primary">📍 {event.location}</h2>
      <h2 className="font-bold text-base  text-primary">📅 {event.date}</h2>
    </div>
  );
};
export default EventInfo;
