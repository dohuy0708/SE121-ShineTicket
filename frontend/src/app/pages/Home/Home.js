// src/pages/Home.js
import React from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import BannerCarousel from "../../components/BannerCarousel";
import EventSection from "../../components/EventSection ";
import Footer from "../../components/Footer";
import "./Home.css";
const Home = () => {
  const bannerEvents = [
    {
      price: "330.000đ",
      date: "26 tháng 09, 2024",
    },
    {
      price: "330.000đ",
      date: "26 tháng 09, 2024",
    },
    {
      price: "330.000đ",
      date: "26 tháng 09, 2024",
    },
    {
      price: "330.000đ",
      date: "26 tháng 09, 2024",
    },
    {
      price: "330.000đ",
      date: "26 tháng 09, 2024",
    },
    {
      price: "330.000đ",
      date: "26 tháng 09, 2024",
    },
    // Các sự kiện khác
  ];

  const specialEvents = [
    {
      name: "Sân khấu Thiên Đàng",
      price: "330.000đ",
      date: "26 tháng 09, 2024",
    },
    {
      name: "Sân khấu Thiên Đàng: Ngũ quý Tương phùng",
      price: "330.000đ",
      date: "26 tháng 09, 2024",
    },
    {
      name: "Sân khấu Thiên Đàng: Ngũ quý Tương phùng Ngũ quý Tương phùng Ngũ quý Tương phùng",
      price: "330.000đ",
      date: "26 tháng 09, 2024",
    },
    {
      name: "Sân khấu Thiên Đàng: quý Tương phùng ",
      price: "330.000đ",
      date: "26 tháng 09, 2024",
    },
    // Các sự kiện khác
  ];

  const trendingEvents = [
    {
      name: "Sân khấu Thiên Đàng: Ngũ quý Tương phùng",
      price: "330.000đ",
      date: "26 tháng 09, 2024",
    },
    {
      name: "Sân khấu Thiên Đàng: Ngũ quý Tương phùng",
      price: "330.000đ",
      date: "26 tháng 09, 2024",
    },
    // Các sự kiện khác
  ];

  return (
    <div className="home">
      <Header />
      <Nav />
      <div className="container">
        <BannerCarousel events={bannerEvents} />
        <EventSection title="Sự kiện đặc biệt" events={specialEvents} />
        <EventSection title="Sự kiện xu hướng" events={trendingEvents} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
