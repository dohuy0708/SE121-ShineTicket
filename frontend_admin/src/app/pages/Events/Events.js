import React, { useState } from "react";
import EventTabs from "./Partials/EventTabs";
import EventSearchBar from "./Partials/EventSearchBar";
import EventList from "./Partials/EventList";
import EventDetailsModal from "./Partials/EventDetailsModal";

const events = [
  {
    name: "Sự kiện A",
    category: "music",
    date: "2024-12-01",
    status: "Đang chờ duyệt",
    description: "Mô tả sự kiện A",
  },
  {
    name: "Sự kiện B",
    category: "sports",
    date: "2024-12-05",
    status: "Đã duyệt",
    description: "Mô tả sự kiện B",
  },
  {
    name: "Sự kiện C",
    category: "education",
    date: "2024-12-10",
    status: "Bị từ chối",
    description: "Mô tả sự kiện C",
  },
];
export default function Events() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState(events);

  const handleSearch = ({ searchTerm, category }) => {
    const filtered = events.filter((event) => {
      return (
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (category === "" || event.category === category)
      );
    });
    setFilteredEvents(filtered);
  };

  const eventsByTab = filteredEvents.filter((event) => {
    if (activeTab === 0) return event.status === "Đang chờ duyệt";
    if (activeTab === 1) return event.status === "Đã duyệt";
    if (activeTab === 2) return event.status === "Bị từ chối";
    return false;
  });

  return (
    <div className="p-6">
      <EventTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <EventSearchBar onSearch={handleSearch} />
      <EventList events={eventsByTab} onViewDetails={setSelectedEvent} />
      <EventDetailsModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
}
