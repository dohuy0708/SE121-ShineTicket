import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="nav-back">
      <div className="nav-container">
        <nav className="navigation">
          <a href="#nhac-song">Nhạc sống</a>
          <a href="#san-khau">Sân khấu & Nghệ thuật</a>
          <a href="#the-thao">Thể thao</a>
          <a href="#khac">Khác</a>
        </nav>
      </div>
    </div>
  );
};
export default Nav;
