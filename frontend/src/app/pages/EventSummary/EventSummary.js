import React, { useState } from "react";
import SummaryTable from "./Partials/SummaryTable";
import RevenueChart from "./Partials/RevenueChart";
import TicketTable from "./Partials/TicketsTable";
import ShowSelector from "./Partials/ShowSelector";

export default function EventSummary() {
  const [selectedDate, setSelectedDate] = useState(""); // Lưu ngày được chọn
  const summaryData = {
    ticketRevenue: "96.000.000",
    serviceFee: "9.600.000",
    totalRevenue: "88.400.000",
  };

  const showData = [
    {
      date: "18/11/2024",
      ticketRevenue: "50.000.000",
      serviceFee: "5.000.000",
      totalRevenue: "45.000.000",
      tickets: [
        {
          type: "VIP",
          price: "600.000",
          total: 30,
          sold: 25,
          revenue: "15.000.000",
        },
        {
          type: "Standard",
          price: "300.000",
          total: 50,
          sold: 45,
          revenue: "13.500.000",
        },
      ],
    },
    {
      date: "19/11/2024",
      ticketRevenue: "46.000.000",
      serviceFee: "4.600.000",
      totalRevenue: "41.400.000",
      tickets: [
        {
          type: "VIP",
          price: "600.000",
          total: 30,
          sold: 20,
          revenue: "12.000.000",
        },
        {
          type: "Standard",
          price: "300.000",
          total: 50,
          sold: 40,
          revenue: "12.000.000",
        },
      ],
    },
  ];

  // Dữ liệu biểu đồ toàn bộ khoảng thời gian bán vé
  const chartData = {
    startDate: "01/11/2024",
    endDate: "20/11/2024",
    sales: [
      { date: "01/11/2024", ticketsSold: 10, revenue: 3000000 },
      { date: "02/11/2024", ticketsSold: 15, revenue: 4500000 },
      { date: "03/11/2024", ticketsSold: 20, revenue: 6000000 },
      { date: "18/11/2024", ticketsSold: 70, revenue: 50000000 }, // Ngày diễn
      { date: "19/11/2024", ticketsSold: 60, revenue: 46000000 }, // Ngày diễn
      { date: "20/11/2024", ticketsSold: 50, revenue: 40000000 },
    ],
  };

  // Lấy dữ liệu của ngày được chọn
  const selectedShow = showData.find((show) => show.date === selectedDate);

  // Lọc dữ liệu biểu đồ theo ngày được chọn
  const filteredChartData =
    selectedShow &&
    chartData.sales
      .filter((sale) => sale.date === selectedShow.date)
      .map((sale) => ({
        date: sale.date,
        ticketsSold: sale.ticketsSold,
        revenue: sale.revenue,
      }));

  // Xây dựng dữ liệu biểu đồ đúng định dạng
  const selectedChartData = {
    startDate: selectedShow?.date,
    endDate: selectedShow?.date,
    sales: filteredChartData || [],
  };
  return (
    <div className="flex-1 bg-black mx-auto">
      <div className=" p-6 ">
        <SummaryTable summaryData={summaryData} />
        <RevenueChart chartData={chartData} />
        {/* Dropdown chọn ngày */}
        <ShowSelector
          shows={showData}
          selectedDate={selectedDate}
          onChange={setSelectedDate}
        />

        {/* Hiển thị dữ liệu theo ngày được chọn */}
        {selectedShow ? (
          <>
            <TicketTable
              tickets={selectedShow.tickets}
              date={selectedShow.date}
            />
          </>
        ) : (
          <p className="text-gray-400">Hãy chọn một ngày để xem thông tin.</p>
        )}
      </div>
    </div>
  );
}
