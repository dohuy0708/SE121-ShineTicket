import React from "react";
//import "./Nav.css";
const Nav = () => {
  return (
    <div className="w-full bg-black">
      <div className="max-w-screen-xl px-4 mx-auto">
        <nav className="flex items-center h-16 ">
          <a className=" cursor-pointer text-white no-underline font-medium px-3 hover:text-primary">
            Nhạc sống
          </a>
          <a className=" cursor-pointer text-white no-underline font-medium px-3 hover:text-primary">
            Sân khấu & Nghệ thuật
          </a>
          <a className=" cursor-pointer text-white no-underline font-medium px-3 hover:text-primary">
            Thể thao
          </a>
          <a className=" cursor-pointer text-white no-underline font-medium px-3 hover:text-primary">
            Khác
          </a>
        </nav>
      </div>
    </div>
  );
};
export default Nav;
