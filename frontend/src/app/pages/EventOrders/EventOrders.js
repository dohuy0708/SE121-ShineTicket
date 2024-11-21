import React, { useState } from "react";
import OrderFilter from "./Partials/OrderFilter";
import OrderList from "./Partials/OrderList";
import OrderDetail from "./Partials/OrderDetail";
const mockOrders = [
  {
    id: "ORD001",
    customer: "Nguyễn Văn A",
    status: "Paid",
    total: 500000,
    date: "2024-11-11",
    tickets: [
      { type: "VIP", quantity: 2 },
      { type: "Standard", quantity: 3 },
    ],
  },
  {
    id: "ORD002",
    customer: "Lê Thị B",
    status: "Pending",
    total: 300000,
    date: "2024-11-12",
    tickets: [{ type: "Standard", quantity: 3 }],
  },
  {
    id: "ORD003",
    customer: "Trần C",
    status: "Cancelled",
    total: 0,
    date: "2024-11-10",
    tickets: [],
  },
  {
    id: "ORD004",
    customer: "Vũ D",
    status: "Paid",
    total: 750000,
    date: "2024-11-13",
    tickets: [{ type: "VIP", quantity: 5 }],
  },
  {
    id: "ORD005",
    customer: "Phạm E",
    status: "Pending",
    total: 200000,
    date: "2024-11-15",
    tickets: [{ type: "Standard", quantity: 1 }],
  },
];
const filterOrders = (orders, filters) => {
  const { status, dateRange } = filters;
  return orders.filter((order) => {
    let matchesStatus = true;
    let matchesDateRange = true;

    // Kiểm tra trạng thái
    if (status) {
      matchesStatus = order.status.toLowerCase() === status.toLowerCase();
    }

    // Kiểm tra ngày
    if (dateRange.from || dateRange.to) {
      const orderDate = new Date(order.date);
      if (dateRange.from) {
        matchesDateRange = orderDate >= new Date(dateRange.from);
      }
      if (dateRange.to) {
        matchesDateRange = orderDate <= new Date(dateRange.to);
      }
    }

    return matchesStatus && matchesDateRange;
  });
};
export default function EventOrders() {
  const [orders, setOrders] = useState(mockOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filteredOrders, setFilteredOrders] = useState(mockOrders);

  const handleFilterChange = (filters) => {
    const filtered = filterOrders(orders, filters);
    setFilteredOrders(filtered);
  };

  return (
    <div className="flex-1 bg-black mx-auto">
      <div className=" p-6 bg-bg-main mx-6 mt-4 rounded-lg ">
        <OrderFilter onFilterChange={handleFilterChange} />
        <OrderList orders={filteredOrders} onSelectOrder={setSelectedOrder} />
        {selectedOrder && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <OrderDetail
              order={selectedOrder}
              onClose={() => setSelectedOrder(null)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
