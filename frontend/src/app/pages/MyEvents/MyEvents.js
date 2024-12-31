import React, { useEffect, useState } from "react";
import EventCard from "./Partials/EventCard";
import { Outlet } from "react-router-dom";
import { getEventsByUser } from "./services/eventService";

const MyEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true); // Trạng thái loading
  const [activeFilter, setActiveFilter] = useState("Sắp diễn ra");

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true); // Bắt đầu tải
      try {
        const userId = localStorage.getItem("user_id");
        const eventFromApi = await getEventsByUser(userId);
        setEvents(eventFromApi);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false); // Hoàn tất tải
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="flex-1 bg-black mx-auto">
      <div className="flex items-center text-2xl pl-4 h-16 bg-bg-main border-b-2 border-[#A19393] font-semibold text-white mb-4">
        Sự kiện đã tạo
      </div>

      <div className="grid grid-cols-2 gap-x-4 mx-6">
        <div className="flex gap-2 ">
          <input
            type="text"
            placeholder="Tìm kiếm sự kiện"
            className="p-2 bg-white text-black rounded-lg w-full "
          />
        </div>

        <div className="flex space-x-2 ml-6">
          {["Tất cả", "Sắp diễn ra", "Đã kết thúc", "Chờ duyệt"].map(
            (filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg ${
                  activeFilter === filter
                    ? "bg-primary text-black"
                    : "bg-white text-black"
                }`}
              >
                {filter}
              </button>
            )
          )}
        </div>
      </div>

      <div className="mt-4">
        {loading ? (
          <div className="text-white text-center">Đang tải sự kiện...</div> // Thông báo đang tải
        ) : events.length > 0 ? (
          events.map((event, index) => <EventCard key={index} event={event} />)
        ) : (
          <div className="text-white text-center">Không có sự kiện nào.</div> // Thông báo không có dữ liệu
        )}
      </div>
    </div>
  );
};

export default MyEvents;
