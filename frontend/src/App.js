import Footer from "./app/components/Footer";
import Header from "./app/components/Header";
import Home from "./app/pages/Home/Home";
import MyEvents from "./app/pages/MyEvents/MyEvents";
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
            <Route path="/" element={<Home />} />
            <Route path="/TicketDetails" element={<TicketDetails />} />
            <Route path="/selectTicket" element={<TicketSelectionPage />} />
            <Route path="/MyEvents" element={<MyEvents />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
