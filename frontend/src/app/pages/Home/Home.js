// src/pages/Home.js
import React from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import BannerCarousel from "../../components/BannerCarousel";
import EventSection from "../../components/EventSection ";
import Footer from "../../components/Footer";
const Home = () => {
  const bannerEvents = [
    {
      name: "Live Concert: Sơn Tùng M-TP",
      price: "500.000đ",
      date: "15 tháng 12, 2024",
      location: "SVĐ Mỹ Đình, Nam Từ Liêm, Hà Nội",
    },
    {
      name: "Hội chợ Tết 2024",
      price: "Miễn phí",
      date: "20 tháng 1, 2024",
      location: "Công viên Thống Nhất, Quận Hai Bà Trưng, Hà Nội",
    },
    {
      name: "Workshop Làm gốm",
      price: "120.000đ",
      date: "25 tháng 11, 2024",
      location: "Tầng 3, tòa nhà ABC, Quận 1, TP.HCM",
    },
    {
      name: "Triển lãm Nghệ Thuật Đương Đại",
      price: "80.000đ",
      date: "5 tháng 2, 2024",
      location: "Bảo tàng Mỹ thuật Việt Nam, Quận Ba Đình, Hà Nội",
    },
    {
      name: "Kịch 'Romeo và Juliet'",
      price: "300.000đ",
      date: "10 tháng 3, 2024",
      location: "Nhà hát Tuổi Trẻ, Hoàn Kiếm, Hà Nội",
    },
    {
      name: "Chương trình hài kịch Xuân Bắc - Tự Long",
      price: "150.000đ",
      date: "8 tháng 12, 2024",
      location: "Nhà hát Lớn, Quận 1, TP.HCM",
    },
    {
      name: "Hòa nhạc Mùa Xuân",
      price: "200.000đ",
      date: "30 tháng 4, 2024",
      location: "Nhà hát TP, Quận 3, TP.HCM",
    },
    {
      name: "Talkshow Tạo động lực với Nguyễn Phương Nam",
      price: "50.000đ",
      date: "12 tháng 11, 2024",
      location: "Phòng hội thảo tầng 5, tòa nhà Landmark 81, TP.HCM",
    },
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
    <div className="bg-bg-main ">
      <Nav />
      <div className="mx-auto max-w-7xl p-4">
        <BannerCarousel events={bannerEvents} />
        <EventSection title="Sự kiện đặc biệt" events={specialEvents} />
        <EventSection title="Sự kiện xu hướng" events={trendingEvents} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
