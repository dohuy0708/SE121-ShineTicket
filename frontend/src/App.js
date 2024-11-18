import Header from "./app/components/Header";
import EventLayout from "./app/layouts/EventLayout";
import MainLayout from "./app/layouts/MainLayout";
import SidebarLayout from "./app/layouts/SideBarLayout";
import CreateEvent from "./app/pages/CreateEvent/CreateEvent";
import EventOrders from "./app/pages/EventOrders/EventOrders";
import EventSummary from "./app/pages/EventSummary/EventSummary";
import Home from "./app/pages/Home/Home";
import MyEvents from "./app/pages/MyEvents/MyEvents";
import MyTickets from "./app/pages/MyTickets/MyTickets";
import Payment from "./app/pages/Payment/Payment";
import TicketDetails from "./app/pages/TicketDetails/TicketDetails";
import TicketSelectionPage from "./app/pages/TicketSelectionPage/TicketSelectionPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="pt-18 m-0 p-0 box-border">
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/ticket-details" element={<TicketDetails />} />
              <Route path="/select-ticket" element={<TicketSelectionPage />} />
              <Route path="/payment" element={<Payment />} />
            </Route>

            {/* Các trang có sidebar: MyTicket, MyEvent, CreateEvent */}
            <Route element={<SidebarLayout />}>
              <Route path="/my-tickets" element={<MyTickets />} />
              <Route path="/create-event" element={<CreateEvent />} />
              <Route path="/my-events" element={<MyEvents />}></Route>
            </Route>
            <Route element={<EventLayout />}>
              <Route path="/summary" element={<EventSummary />} />
              <Route path="/orders" element={<EventOrders />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
