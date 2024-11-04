// src/components/Header.js
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">SHINETICKET</div>
      <div className="search-bar">
        <input type="text" placeholder="Bạn tìm gì hôm nay?" />
        <button>Tìm kiếm</button>
      </div>
      <div className="actions">
        <button className="create-event-btn">Tạo sự kiện</button>
        <a>Vé đã mua</a>
        <a>Tài khoản</a>
      </div>
    </header>
  );
};

export default Header;
