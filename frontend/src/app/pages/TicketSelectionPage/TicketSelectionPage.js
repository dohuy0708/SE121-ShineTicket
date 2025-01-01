import React, { useState, useEffect } from "react";
import TicketType from "./Partials/TicketType";
import CartSummary from "./Partials/CartSummary";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const TicketSelectionPage = () => {
  const location = useLocation();
  const { event } = location.state || {};

  const [ticketQuantities, setTicketQuantities] = useState({});

  // Khởi tạo ticketQuantities khi có dữ liệu event.tickets
  useEffect(() => {
    if (event?.tickets) {
      const initialQuantities = event.tickets.reduce((acc, ticket) => {
        acc[ticket.ticketType] = 0; // Đặt số lượng ban đầu là 0
        return acc;
      }, {});
      setTicketQuantities(initialQuantities);
    }
  }, [event]);

  const setQuantity = (type, quantity) => {
    setTicketQuantities((prevQuantities) => ({
      ...prevQuantities,
      [type]: quantity,
    }));
  };

  // Tạo giỏ hàng dựa trên số lượng vé đã chọn
  const cartItems = event?.tickets
    .filter((ticket) => ticketQuantities[ticket.ticketType] > 0)
    .map((ticket) => ({
      ticket_id: ticket.id,
      ticket_type: ticket.ticketType,
      price: ticket.price,
      quantity: ticketQuantities[ticket.ticketType],
      total: ticket.price * ticketQuantities[ticket.ticketType],
    }));

  const total = cartItems.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="relative min-h-[calc(100vh-72px)] bg-black space-y-4 lg:space-y-0 lg:space-x-4">
      <div className="w-[75%]">
        <div className="relative pt-10 mb-8">
          <h2 className="absolute left-16 text-lg text-primary font-bold">
            Trở về
          </h2>

          <h2 className="text-primary text-center text-xl font-bold mb-4">
            Chọn vé
          </h2>
        </div>

        <div className="w-[75%] px-4 mx-auto">
          {event?.tickets.map((ticket) => (
            <TicketType
              key={ticket.ticketType}
              name={ticket.ticketType}
              price={ticket.price.toLocaleString()}
              soldOut={ticket.status}
              description={ticket.description}
              quantity={ticketQuantities[ticket.ticketType] || 0}
              setQuantity={(quantity) =>
                setQuantity(ticket.ticketType, quantity)
              }
            />
          ))}
        </div>
      </div>
      <div className="w-1/4 absolute top-0 right-0 h-[100%]">
        <CartSummary items={cartItems} total={total} event={event} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default TicketSelectionPage;
