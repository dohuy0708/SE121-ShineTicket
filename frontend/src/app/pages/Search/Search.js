import React, { useEffect, useState } from "react";
import SearchFilter from "./Partials/SearchFilter";
import { useNavigate } from "react-router-dom";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { getAllEvents } from "./services/searchService";

export default function Search() {
  const [filters, setFilters] = useState({
    dateFrom: "",
    dateTo: "",
    location: "Toàn quốc",
    category: "Tất cả",
    priceRange: [0, 1000000],
  });
  const nav = useNavigate();
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [searchResults, setSearchResults] = useState([]); // Mock kết quả tìm kiếm

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getAllEvents();
      setSearchResults(events);
    };

    fetchEvents();
  }, []);
  const handleApplyFilters = () => {
    console.log("Filters applied:", filters);
    // Giả lập tìm kiếm với mock data
    const results = mockSearch(filters);
    setSearchResults(results);
    setFilterVisible(false);
  };

  const handleViewDetail = (id) => {
    nav(`/ticket-details/${id}`);
  };

  const mockSearch = (filters) => {
    return [
      {
        id: 1,
        title: "Sự kiện A",
        price: 50000,
        location: "Hồ Chí Minh",
        date: "2024-12-01",
      },
      {
        id: 2,
        title: "Sự kiện B",
        price: 200000,
        location: "Hà Nội",
        date: "2024-12-03",
      },
    ].filter((event) => {
      return (
        event?.price >= filters.priceRange[0] &&
        event?.price <= filters.priceRange[1] &&
        (filters.location === "Toàn quốc" ||
          event?.location === filters.location)
      );
    });
  };

  return (
    <div className="  bg-bg-main ">
      <div className="relative text-white min-h-screen mx-auto max-w-7xl p-4">
        {/* Nút Lọc */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">Kết quả tìm kiếm:</h1>
          <div className="relative">
            <button
              className="bg-primary w-32 text-black px-4 py-1 rounded-xl"
              onClick={() => setFilterVisible(!isFilterVisible)}
            >
              {isFilterVisible ? "Đóng bộ lọc" : "Lọc"}
            </button>
            {isFilterVisible && (
              <SearchFilter
                filters={filters}
                setFilters={setFilters}
                onApply={handleApplyFilters}
              />
            )}
          </div>
        </div>

        {/* Hiển thị kết quả tìm kiếm */}
        <div className="grid grid-cols-4 gap-4 mt-4">
          {searchResults.map((result) => (
            <div
              className="event-card w-full p-[5px] cursor-pointer"
              key={result._id}
              onClick={() => handleViewDetail(result._id)}
            >
              <div className="event-image bg-gray-200 h-[175px] rounded-lg mb-[10px]">
                <image
                  src={result?.cover_image_url}
                  className="w-full h-full object-cover"
                  alt={result?.event_name}
                />
              </div>
              <div className="event-info flex flex-col gap-2">
                <div className="event-name w-full overflow-hidden text-ellipsis whitespace-nowrap leading-[21px] font-semibold uppercase">
                  {<h2 className="text-lg font-medium">{result.event_name}</h2>}
                </div>
                <div className="event-price text-primary font-semibold">
                  Từ: {result?.ticketPrice?.toLocaleString()} đ
                </div>
                <div className="event-date flex-1 flex items-center">
                  {" "}
                  <CalendarDaysIcon className="text-white inline w-5 bg-transparent mr-2" />
                  {new Date(result.start_date).toLocaleDateString("vi-VN", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
