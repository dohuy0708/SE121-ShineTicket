import React, { useState } from "react";

const OrderFilter = ({ onFilterChange }) => {
  const [status, setStatus] = useState("");
  const [dateRange, setDateRange] = useState({ from: "", to: "" });

  const handleApplyFilters = () => {
    onFilterChange({ status, dateRange });
  };

  return (
    <div className="flex items-center gap-4 mb-4">
      {/* Bộ lọc trạng thái */}
      <select
        className="border rounded p-2"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">Tất cả trạng thái</option>
        <option value="Pending">Chờ thanh toán</option>
        <option value="Paid">Đã thanh toán</option>
        <option value="Cancelled">Đã hủy</option>
      </select>

      {/* Bộ lọc ngày */}
      <div className="flex gap-2">
        <input
          type="date"
          className="border rounded p-2"
          value={dateRange.from}
          onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })}
        />
        <input
          type="date"
          className="border rounded p-2"
          value={dateRange.to}
          onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
        />
      </div>

      {/* Nút áp dụng */}
      <button
        className="bg-primary text-white px-4 py-2 rounded"
        onClick={handleApplyFilters}
      >
        Áp dụng
      </button>
    </div>
  );
};

export default OrderFilter;
