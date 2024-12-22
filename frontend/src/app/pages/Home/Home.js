// src/pages/Home.js
import React, { useEffect, useState } from "react";
import Nav from "./partials/Nav";
import BannerCarousel from "./partials/BannerCarousel";
import EventSection from "../../components/EventSection ";
import Footer from "../../components/Footer";
import { getEvents } from "../../../services/service";
const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getEvents();
        setEvents(data); // Lưu danh sách sự kiện vào state
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="bg-bg-main ">
      <Nav />
      <div className="mx-auto max-w-7xl p-4">
        <BannerCarousel events={events} />
        <EventSection title="Sự kiện đặc biệt" events={events.slice(0, 4)} />
        <EventSection title="Sự kiện xu hướng" events={events.slice(-4)} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
