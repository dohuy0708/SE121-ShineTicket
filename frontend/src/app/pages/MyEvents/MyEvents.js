import React, { useState } from "react";
import EventCard from "../../components/EventCard";
const MyEvents = () => {
  const events = [
    {
      name: "Sự kiện chào đón tân sinh viên 2024",
      date: "Thứ Ba, 24/09/2024",
      time: "08:00",
      location: "Đại học Công Nghệ Thông Tin",
    },
    {
      name: "Máy tính cũ - Tri  thức mới",
      date: "24/11/2024",
      time: "08:00",
      location: "Nhà văn hóa sinh viên, Đại học quốc gia Hồ Chí Minh",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("Sắp diễn ra");
  return (
    <div className=" flex-1 bg-black mx-auto">
      <div className="flex items-center text-2xl pl-4 h-16 bg-bg-main border-b-2 border-[#A19393] font-semibold text-white mb-4">
        Sự kiện đã tạo
      </div>

      <div className="flex w-full mx-6">
        <div className="flex gap-2 w-1/3">
          <input
            type="text"
            placeholder="Tìm kiếm sự kiện"
            className="p-2 bg-white text-black rounded-lg w-full "
          />
        </div>

        <div className="flex  space-x-2 ml-6">
          {["Tất cả", "Sắp diễn ra", "Đã kết thúc", "Chờ duyệt", "Nháp"].map(
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
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};
export default MyEvents;
