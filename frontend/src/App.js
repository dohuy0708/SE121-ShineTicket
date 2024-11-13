import Footer from "./app/components/Footer";
import Header from "./app/components/Header";
import MainLayout from "./app/layouts/MainLayout";
import SidebarLayout from "./app/layouts/SideBarLayout";
import CreateEvent from "./app/pages/CreateEvent/CreateEvent";
import Home from "./app/pages/Home/Home";
import MyEvents from "./app/pages/MyEvents/MyEvents";
import MyTickets from "./app/pages/MyTickets/MyTickets";
import Payment from "./app/pages/Payment/Payment";
import TicketDetails from "./app/pages/TicketDetails/TicketDetails";
import TicketSelectionPage from "./app/pages/TicketSelectionPage/TicketSelectionPage";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="pt-18 m-0 p-0 box-border">
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/TicketDetails" element={<TicketDetails />} />
            <Route path="/selectTicket" element={<TicketSelectionPage />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/MyEvents" element={<MyEvents />} /> */}

            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/ticket-details" element={<TicketDetails />} />
              <Route path="/select-ticket" element={<TicketSelectionPage />} />
              <Route path="/payment" element={<Payment />} />
            </Route>

            {/* Các trang có sidebar: MyTicket, MyEvent, CreateEvent */}
            <Route element={<SidebarLayout />}>
              <Route path="/my-tickets" element={<MyTickets />} />
              <Route path="/my-events" element={<MyEvents />} />
              <Route path="/create-event" element={<CreateEvent />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
