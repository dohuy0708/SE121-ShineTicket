import PrivateRoute from "./app/components/PrivateRoute";
import AccessLayout from "./app/layouts/AccessLayout";
import EventLayout from "./app/layouts/EventLayout";
import MainLayout from "./app/layouts/MainLayout";
import SidebarLayout from "./app/layouts/SideBarLayout";
import Login from "./app/pages/Access/Login";
import SignUp from "./app/pages/Access/SignUp";
import CreateEvent from "./app/pages/CreateEvent/CreateEvent";
import EventOrders from "./app/pages/EventOrders/EventOrders";
import EventSummary from "./app/pages/EventSummary/EventSummary";
import Home from "./app/pages/Home/Home";
import MyAccount from "./app/pages/MyAccount/MyAccount";
import MyEvents from "./app/pages/MyEvents/MyEvents";
import MyTickets from "./app/pages/MyTickets/MyTickets";
import Payment from "./app/pages/Payment/Payment";
import Search from "./app/pages/Search/Search";
import TicketDetails from "./app/pages/TicketDetails/TicketDetails";
import TicketSelectionPage from "./app/pages/TicketSelectionPage/TicketSelectionPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AccessLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/ticket-details/:id" element={<TicketDetails />} />
            <Route path="/select-ticket" element={<TicketSelectionPage />} />
            <Route path="/payment" element={<Payment />} />
          </Route>
          <Route
            element={
              <PrivateRoute>
                <SidebarLayout />
              </PrivateRoute>
            }
          >
            <Route path="/my-tickets" element={<MyTickets />} />
            <Route path="/create-event" element={<CreateEvent />} />
            <Route path="/my-events" element={<MyEvents />} />
            <Route path="/my-account" element={<MyAccount />} />
          </Route>
          <Route
            element={
              <PrivateRoute>
                <EventLayout />
              </PrivateRoute>
            }
          >
            <Route path="/summary/:id" element={<EventSummary />} />
            <Route path="/orders/:id" element={<EventOrders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
