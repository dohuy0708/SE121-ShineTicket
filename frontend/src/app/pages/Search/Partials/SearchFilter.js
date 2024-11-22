import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function SearchFilter({ filters, setFilters, onApply }) {
  const locations = [
    "Toàn quốc",
    "Hồ Chí Minh",
    "Hà Nội",
    "Đà Lạt",
    "Vị trí khác",
  ];
  const categories = ["Nhạc sống", "Sân khấu & Nghệ thuật", "Thể thao", "Khác"];

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="absolute top-8 mt-2 right-0 bg-white text-black p-4 rounded-md shadow-lg  z-50">
      {/* Lọc theo ngày */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Ngày
        </label>
        <div className="flex gap-2">
          <input
            type="date"
            value={filters.dateFrom}
            onChange={(e) => handleFilterChange("dateFrom", e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md w-full"
          />
          <input
            type="date"
            value={filters.dateTo}
            onChange={(e) => handleFilterChange("dateTo", e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md w-full"
          />
        </div>
      </div>

      {/* Lọc theo vị trí */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Vị trí
        </label>
        <select
          value={filters.location}
          onChange={(e) => handleFilterChange("location", e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-md w-full"
        >
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      {/* Lọc theo thể loại */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Thể loại
        </label>
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterChange("category", cat)}
              className={`px-3 py-1 rounded-md border ${
                filters.category === cat
                  ? "bg-primary text-white"
                  : "bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Lọc theo giá */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Khoảng giá (VNĐ)
        </label>
        <div className="px-2">
          <Slider
            range
            min={0}
            max={5000000}
            step={100000}
            value={filters.priceRange}
            onChange={(value) => handleFilterChange("priceRange", value)}
            trackStyle={[{ backgroundColor: "#ffc107" }]}
            handleStyle={[
              { borderColor: "#ffc107" },
              { borderColor: "#ffc107" },
            ]}
          />
        </div>
        <div className="flex justify-between text-sm mt-1">
          <span>{filters.priceRange[0].toLocaleString()}đ</span>
          <span>{filters.priceRange[1].toLocaleString()}đ</span>
        </div>
      </div>

      {/* Nút hành động */}
      <div className="flex gap-2">
        <button
          onClick={() =>
            setFilters({
              dateFrom: "",
              dateTo: "",
              location: "Toàn quốc",
              category: "Tất cả",
              priceRange: [0, 1000000],
            })
          }
          className="bg-gray-200 px-4 py-2 rounded-md w-1/2"
        >
          Thiết lập lại
        </button>
        <button
          onClick={onApply}
          className="bg-primary text-white px-4 py-2 rounded-md w-1/2"
        >
          Áp dụng
        </button>
      </div>
    </div>
  );
}
