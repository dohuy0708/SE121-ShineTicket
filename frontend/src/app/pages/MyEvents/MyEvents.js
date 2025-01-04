import React, { useEffect, useState } from "react";
import EventCard from "./Partials/EventCard";
import { getEventsByUser } from "./services/eventService";

const MyEvents = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]); // Sự kiện sau khi lọc
  const [loading, setLoading] = useState(true); // Trạng thái loading
  const [activeFilter, setActiveFilter] = useState("Tất cả"); // Bộ lọc đang chọn

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true); // Bắt đầu tải
      try {
        const userId = localStorage.getItem("user_id");
        const eventFromApi = await getEventsByUser(userId);
        setEvents(eventFromApi);
        setFilteredEvents(eventFromApi); // Mặc định hiển thị tất cả sự kiện
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false); // Hoàn tất tải
      }
    };
    fetchEvents();
  }, []);

  const filterEvents = (filter) => {
    setActiveFilter(filter); // Cập nhật bộ lọc
    if (filter === "Tất cả") {
      setFilteredEvents(events);
    } else {
      const statusMap = {
        "Chờ duyệt": "676ece5d50c4e95732edbadd",
        "Sắp diễn ra": "675ea25872e40e87eb7dbf08",
        "Đang diễn ra": "675ea24172e40e87eb7dbf06",
        "Đã kết thúc": "675ea26172e40e87eb7dbf0a",
        "Đã hủy": "676ece8250c4e95732edbadf",
      };
      const statusId = statusMap[filter];
      const filtered = events.filter(
        (event) => event.event_status_id === statusId
      );
      setFilteredEvents(filtered);
    }
  };

  return (
    <div className="flex-1 bg-black mx-auto">
      <div className="flex items-center text-2xl pl-4 h-16 bg-bg-main border-b-2 border-[#A19393] font-semibold text-white mb-4">
        Sự kiện đã tạo
      </div>

      <div className="grid grid-cols-5 gap-x-4 mx-6">
        <div className="flex gap-2 col-span-2">
          <input
            type="text"
            placeholder="Tìm kiếm sự kiện"
            className="p-2 bg-white text-black rounded-lg w-full "
          />
        </div>

        <div className="flex space-x-2 ml-6 col-span-3">
          {[
            "Tất cả",
            "Chờ duyệt",
            "Sắp diễn ra",
            "Đang diễn ra",
            "Đã kết thúc",
            "Đã hủy",
          ].map((filter) => (
            <button
              key={filter}
              onClick={() => filterEvents(filter)}
              className={`px-4 py-2 rounded-lg ${
                activeFilter === filter
                  ? "bg-primary text-black"
                  : "bg-white text-black"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        {loading ? (
          <div className="text-white text-center">Đang tải sự kiện...</div> // Thông báo đang tải
        ) : filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <EventCard key={event._id} event={event} />
          ))
        ) : (
          <div className="text-white text-center">Không có sự kiện nào.</div> // Thông báo không có dữ liệu
        )}
      </div>
    </div>
  );
};

export default MyEvents;
