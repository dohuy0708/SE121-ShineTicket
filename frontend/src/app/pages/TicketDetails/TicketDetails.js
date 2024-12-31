import React, { useEffect, useState } from "react";
import BigTicket from "./Partials/BigTicket";
import TicketInfo from "./Partials/TicketInfo";
import { useParams } from "react-router-dom";
import EventInfo from "./Partials/EventInfo";
import { getEventById } from "./eventService";

const TicketDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const data = await getEventById(id);
        console.log("fetch: ", data);
        setEvent(data); // Set dữ liệu sau khi lấy về
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };
    fetchEvent();
  }, []); // Chạy lại khi `id` thay đổi

  return (
    <div className="bg-bg-main ">
      <div className="mx-auto max-w-7xl p-4">
        <BigTicket event={event} />
        <div>
          <EventInfo />
          <TicketInfo event={event} />
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
