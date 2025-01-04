import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllOrders } from "./summaryService";
import { toast } from "react-toastify";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const EventSummary = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const orderApi = await getAllOrders(id);
        setOrders(orderApi);
      } catch (error) {
        console.error("Error fetching refund:", error);
        toast.error("Không thể tải dữ liệu. Vui lòng thử lại!");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [id]);

  // Tính toán các thống kê cơ bản
  const calculateStats = () => {
    const totalRevenue = orders.reduce(
      (sum, order) => sum + parseFloat(order.total_amount),
      0
    );

    const totalTickets = orders.reduce(
      (sum, order) => sum + order.order_details.length,
      0
    );

    const ticketTypeStats = orders.reduce((acc, order) => {
      order.order_details.forEach((ticket) => {
        if (!acc[ticket.ticket_type]) {
          acc[ticket.ticket_type] = 0;
        }
        acc[ticket.ticket_type]++;
      });
      return acc;
    }, {});

    return { totalRevenue, totalTickets, ticketTypeStats };
  };

  // Dữ liệu cho biểu đồ doanh thu theo ngày
  const prepareRevenueData = () => {
    const revenueByDate = orders.reduce((acc, order) => {
      const date = new Date(order.order_date).toLocaleDateString("vi-VN");
      if (!acc[date]) {
        acc[date] = 0;
      }
      acc[date] += parseFloat(order.total_amount);
      return acc;
    }, {});

    return Object.entries(revenueByDate).map(([date, amount]) => ({
      date,
      amount,
    }));
  };

  const stats = calculateStats();
  const revenueData = prepareRevenueData();
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl text-gray-200">Đang tải dữ liệu...</div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-6 bg-gray-950">
      {/* Thống kê tổng quan */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-gray-400 text-sm font-medium">Tổng doanh thu</h3>
          <p className="text-2xl font-bold text-white mt-2">
            {stats.totalRevenue.toLocaleString()} VND
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-gray-400 text-sm font-medium">
            Tổng số vé đã bán
          </h3>
          <p className="text-2xl font-bold text-white mt-2">
            {stats.totalTickets} vé
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-gray-400 text-sm font-medium">Số đơn hàng</h3>
          <p className="text-2xl font-bold text-white mt-2">
            {orders.length} đơn
          </p>
        </div>
      </div>

      {/* Biểu đồ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-gray-300 text-lg font-medium mb-4">
            Doanh thu theo ngày
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="#8884d8"
                name="Doanh thu (VND)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-gray-300 text-lg font-medium mb-4">
            Phân bố loại vé
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={Object.entries(stats.ticketTypeStats).map(
                  ([name, value]) => ({
                    name,
                    value,
                  })
                )}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} (${(percent * 100).toFixed(0)}%)`
                }
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {Object.entries(stats.ticketTypeStats).map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default EventSummary;
