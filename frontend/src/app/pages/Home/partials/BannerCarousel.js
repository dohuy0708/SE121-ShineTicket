import React, { useState } from "react";
import "./BannerCarousel.css";
import { useNavigate } from "react-router-dom";
const BannerCarousel = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 2; // Số lượng slide hiển thị
  const navigate = useNavigate();
  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % Math.ceil(events.length / slidesToShow)
    );
  };
  const handleViewDetails = (event) => {
    navigate(`/ticket-details`, { state: { event } });
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
          <div className="carousel-slide-container">
            <div key={index} className="carousel-slide">
              <img src={event.image} alt={event.name} />
              <div className="slide-text">
                <div className="slide-info">
                  <div className="slide-price text-primary">
                    Từ {event.price}
                  </div>
                  <div className="slide-date">{event.date}</div>
                </div>
                <button
                  className="slide-button hover:bg-primary hover:text-white"
                  onClick={() => handleViewDetails(event)}
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
