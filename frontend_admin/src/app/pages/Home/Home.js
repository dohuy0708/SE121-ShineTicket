import React from "react";
import OverviewCard from "./partials/OverviewCard";
import RevenueTable from "./partials/RevenueTable";
import Chart from "./partials/Chart";

export default function Home() {
  // Dữ liệu mẫu
  const overviewData = [
    { title: "Tổng doanh thu", value: "500,000,000 VND" },
    { title: "Phí dịch vụ", value: "50,000,000 VND" },
    { title: "Đã thanh toán", value: "300,000,000 VND" },
    { title: "Doanh thu giữ lại", value: "200,000,000 VND" },
  ];

  const chartData = [
    { month: "Tháng 1", revenue: 50000000 },
    { month: "Tháng 2", revenue: 60000000 },
    { month: "Tháng 3", revenue: 70000000 },
    { month: "Tháng 4", revenue: 80000000 },
  ];

  const eventsData = [
    {
      name: "Sự kiện A",
      revenue: "20,000,000 VND",
      ticketsSold: 200,
      status: "Đã kết thúc",
    },
    {
      name: "Sự kiện B",
      revenue: "50,000,000 VND",
      ticketsSold: 500,
      status: "Đã kết thúc",
    },
    {
      name: "Sự kiện C",
      revenue: "10,000,000 VND",
      ticketsSold: 100,
      status: "Đang diễn ra",
    },
  ];

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Thẻ tổng quan */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {overviewData.map((data, index) => (
          <OverviewCard key={index} title={data.title} value={data.value} />
        ))}
      </div>

      {/* Biểu đồ */}
      <Chart data={chartData} />

      {/* Bảng chi tiết */}
      <RevenueTable events={eventsData} />
    </div>
  );
}
