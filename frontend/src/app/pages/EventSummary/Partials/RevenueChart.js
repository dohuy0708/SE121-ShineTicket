import React from "react";
// import { Line } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title);
const RevenueChart = ({ chartData }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Doanh thu vé ngày " + chartData[0].date },
    },
  };

  const data = {
    labels: chartData[0].tickets.map((ticket) => ticket.type),
    datasets: [
      {
        label: "Doanh thu vé (đ)",
        data: chartData[0].tickets.map((ticket) =>
          parseInt(ticket.revenue.replace(/\./g, ""))
        ),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };
  return <div>chart</div>;
  // return <Bar options={options} data={data} />;
};

export default RevenueChart;
