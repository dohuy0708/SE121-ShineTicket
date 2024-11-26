import React, { useState } from "react";

const EventSearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = () => {
    onSearch({ searchTerm, category });
  };

  return (
    <div className="flex items-center space-x-4 mb-4">
      <input
        type="text"
        placeholder="Tìm kiếm sự kiện..."
        className="border border-gray-300 rounded-lg px-4 py-2 w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        className="border border-gray-300 rounded-lg px-4 py-2"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Thể loại</option>
        <option value="music">Âm nhạc</option>
        <option value="sports">Thể thao</option>
        <option value="education">Giáo dục</option>
      </select>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={handleSearch}
      >
        Tìm kiếm
      </button>
    </div>
  );
};

export default EventSearchBar;
