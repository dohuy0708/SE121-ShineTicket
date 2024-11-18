import React, { useState } from "react";
import TicketType from "./Partials/TicketType";
import CartSummary from "./Partials/CartSummary";
import { useLocation } from "react-router-dom";
const TicketSelectionPage = () => {
  const location = useLocation();
  const { event } = location.state || {};

  const [ticketQuantities, setTicketQuantities] = useState({
    vip1: 0,
    vip2: 0,
    ca1: 0,
  });

  const setQuantity = (type, quantity) => {
    setTicketQuantities({ ...ticketQuantities, [type]: quantity });
  };

  const tickets = [
    {
      name: "VIP 1",
      price: 600000,
      soldOut: true,
      description: "Có chỗ ngồi, trước sân khấu, được phục vụ nước uống",
      type: "vip1",
    },
    {
      name: "VIP 2",
      price: 800000,
      soldOut: false,
      description: "Chỗ ngồi ngay sát sân khấu, được phục vụ nước uống",
      type: "vip2",
    },
    {
      name: "CA 1",
      price: 450000,
      soldOut: false,
      description: "Đứng xung quanh sân khấu",
      type: "ca1",
    },
  ];

  const cartItems = tickets
    .filter((ticket) => ticketQuantities[ticket.type] > 0)
    .map((ticket) => ({
      name: ticket.name,
      quantity: ticketQuantities[ticket.type],
      total: ticket.price * ticketQuantities[ticket.type],
    }));

  const total = cartItems.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className=" relative min-h-[calc(100vh-72px)] bg-black space-y-4 lg:space-y-0 lg:space-x-4">
      <div className="w-[75%]">
        <div className="relative pt-10 mb-8">
          <h2 className="absolute left-16 text-lg text-primary font-bold">
            Trở về
          </h2>

          {/* Tiêu đề "Chọn vé" */}
          <h2 className="text-yellow-500 text-center text-xl font-bold mb-4">
            Chọn vé
          </h2>
        </div>

        <div className=" w-[75%] px-4  mx-auto">
          {tickets.map((ticket) => (
            <TicketType
              key={ticket.type}
              name={ticket.name}
              price={ticket.price.toLocaleString()}
              soldOut={ticket.soldOut}
              description={ticket.description}
              quantity={ticketQuantities[ticket.type]}
              setQuantity={(quantity) => setQuantity(ticket.type, quantity)}
            />
          ))}
        </div>
      </div>
      <div className="w-1/4 absolute top-0 right-0 h-[100%]">
        <CartSummary
          items={cartItems}
          total={total.toLocaleString()}
          event={event}
        />
      </div>
    </div>
  );
};

export default TicketSelectionPage;
