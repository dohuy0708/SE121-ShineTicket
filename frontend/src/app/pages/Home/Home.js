// src/pages/Home.js
import React, { useEffect, useState } from "react";
import Nav from "./partials/Nav";
import BannerCarousel from "./partials/BannerCarousel";
import EventSection from "../../components/EventSection ";
import Footer from "../../components/Footer";
import { getEvents } from "../../../services/service";
import { getBanner, getSpecial, getTrend } from "./services/homeService";
const Home = () => {
  const [banner, setBanner] = useState([]);
  const [special, setSpecial] = useState([]);
  const [trend, setTrend] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getBanner();
        setBanner(data); // Lưu danh sách sự kiện vào state
        const data1 = await getSpecial();
        setSpecial(data1); // Lưu danh sách sự kiện vào state
        const data2 = await getTrend();
        setTrend(data2); // Lưu danh sách sự kiện vào state
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-full">
        <div className="w-12 h-12 border-4 border-t-4 border-gray-200 border-t-primary rounded-full animate-spin"></div>
      </div>
    );

  if (error) return <p>Error: {error}</p>;
  return (
    <div className="bg-bg-main ">
      <Nav />
      <div className="mx-auto max-w-7xl p-4">
        <BannerCarousel events={banner} />
        <EventSection title="Sự kiện đặc biệt" events={special} />
        <EventSection title="Sự kiện xu hướng" events={trend} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
