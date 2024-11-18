import React from "react";
import SummaryTable from "./Partials/SummaryTable";
import RevenueChart from "./Partials/RevenueChart";
import TicketTable from "./Partials/TicketsTable";
import { useState } from "react";
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

  // Lấy dữ liệu của ngày được chọn
  const selectedShow = showData.find((show) => show.date === selectedDate);

  return (
    <div className="flex-1 bg-black mx-auto">
      <div className="flex items-center text-2xl pl-4 h-16 bg-bg-main border-b-2 border-[#A19393] font-semibold text-white mb-4">
        Sự kiện ----
      </div>
      <div className="mt-4 mx-6 bg-bg-main p-6 rounded-lg ">
        <h1 className="text-3xl text-white font-bold mb-6">Tóm tắt sự kiện</h1>
        <SummaryTable summaryData={summaryData} />
        {/* Dropdown chọn ngày */}
        <ShowSelector
          shows={showData}
          selectedDate={selectedDate}
          onChange={setSelectedDate}
        />

        {/* Hiển thị dữ liệu theo ngày được chọn */}
        {selectedShow ? (
          <>
            <RevenueChart chartData={[selectedShow]} />
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
