// src/components/EventSection.js
import React from "react";
import "./EventSection.css";

const EventSection = ({ events }) => {
  return (
    <section className="event-section">
      <div className="event-header">
        <div className="event-type">Sự kiện </div>
        <div className="more">Xem thêm</div>
      </div>
      <div className="events">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <div className="event-image"></div>
            <div className="event-info">
              <div className="event-name">{event.name}</div>
              <div className="event-price">Từ {event.price}</div>
              <div className="event-date">{event.date}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventSection;
