// src/components/EventInfo.js
import React from "react";

const BigTicket = () => {
  return (
    <div className="w-full h-max pb-8 mt-4 pl-4 pr-4">
      <div className="w-full h-full flex text-white rounded-[1.5rem] bg-bg-primary overflow-hidden">
        <div className="flex-2 bg-[#38383D] relative p-[1.875rem]">
          <div className="absolute w-[3.75rem] h-[3.75rem] rounded-full z-11 top-0 right-0 transform translate-x-[1.875rem] translate-y-[-1.875rem] bg-bg-main"></div>
          <div className="absolute w-[3.75rem] h-[3.75rem] rounded-full z-11 bottom-0 right-0 transform translate-x-[1.875rem] translate-y-[1.875rem] bg-bg-main"></div>
          <div className="w-full h-full flex flex-col justify-between">
            <div className="flex flex-col justify-center">
              <p className="text-[20px] font-bold font-inter leading-[150%] overflow-hidden break-words">
                JUNE’S LOVER - JUNE WANWIMOL FAN MEETING IN VIETNAM
              </p>
              <p className="font-bold mt-4 text-primary">
                📅 14:00-17:00, 28 tháng 09, 2024
              </p>
              <p className="font-bold mt-4 text-primary">
                📍 Nhà hát Bến Thành
              </p>
              <p className="leading-[150%] font-normal text-[#C4C4CF] ml-6">
                Số 6 Mạc Đĩnh Chi, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí
                Minh
              </p>
            </div>
            <div className="border-t border-[#C4C4CF]">
              <div className="flex items-center gap-2 py-4 text-2xl font-bold">
                <p className="text-lg font-semibold ">
                  Giá từ:{" "}
                  <span className="text-xl font-bold text-primary">
                    1.800.000 đ
                  </span>
                </p>
              </div>
              <button className="w-full bg-primary py-2 rounded-md hover:bg-white hover:text-black font-bold text-white">
                Mua vé ngay
              </button>
            </div>
          </div>
        </div>
        <div className="flex-3 flex items-center justify-center overflow-hidden">
          <img
            className="w-full h-full object-cover object-center overflow-clip"
            src="/img.png"
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
};

export default BigTicket;
