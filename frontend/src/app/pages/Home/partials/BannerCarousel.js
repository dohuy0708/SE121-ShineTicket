import React, { useState } from "react";
import "./BannerCarousel.css";
import { useNavigate } from "react-router-dom";
const BannerCarousel = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 2;
  const navigate = useNavigate();
  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % Math.ceil(events.length / slidesToShow)
    );
  };
  const handleViewDetails = (id) => {
    navigate(`/ticket-details/${id}`);
  };
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + Math.ceil(events.length / slidesToShow)) %
        Math.ceil(events.length / slidesToShow)
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-slides"
        style={{
          transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)`,
        }} // Chia tỷ lệ theo số slide hiển thị
      >
        {events.map((event, index) => (
          <div key={event?._id} className="carousel-slide-container">
            <div className="carousel-slide">
              <img
                className="w-full h-full object-cover"
                src={`http://localhost:8080/images/${event?.cover_image_url}`}
                alt={event?.event_name}
              />
              <div className="slide-text">
                <div className="slide-info bg-gray-500 bg-opacity-70 rounded-md">
                  <div className="slide-price text-primary">
                    Từ {event?.lowest_price?.toLocaleString()} đ
                  </div>
                  <div className="slide-date">
                    {" "}
                    {new Date(event?.start_date).toLocaleDateString("vi-VN", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </div>
                </div>
                <button
                  className="slide-button hover:bg-primary hover:text-white"
                  onClick={() => handleViewDetails(event?._id)}
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control bg-primary prev" onClick={prevSlide}>
        ‹
      </button>
      <button className="carousel-control bg-primary next" onClick={nextSlide}>
        ›
      </button>

      <div className="carousel-dots">
        {Array.from({ length: Math.ceil(events.length / slidesToShow) }).map(
          (_, index) => (
            <span
              key={index}
              className={`dot ${
                index === currentIndex ? "active bg-primary" : ""
              }`}
              onClick={() => goToSlide(index)}
            ></span>
          )
        )}
      </div>
    </div>
  );
};

export default BannerCarousel;
