import React, { useState } from "react";
import Performance from "../../../components/Performance";

function Step2() {
  const [performanceList, setPerformanceList] = useState([]);

  // Hàm xử lý khi nhấn nút "Tạo suất diễn"
  const handleAddPerformance = () => {
    setPerformanceList([...performanceList, {}]);
  };

  return (
    <div className="p-4 pt-0">
      <h3 className="text-xl text-white font-semibold mb-4">
        Thời gian & loại vé
      </h3>
      <div>
        {performanceList.map((_, index) => (
          <Performance
            key={index}
            index={index}
            onDelete={() =>
              setPerformanceList(
                performanceList.filter((_, idx) => idx !== index)
              )
            }
          />
        ))}
      </div>
      <div className="flex text-center justify-center">
        <button
          onClick={handleAddPerformance}
          className="mt-4 px-4 py-2 bg-transparent text-primary font-semibold "
        >
          <span className=" rounded-2xl  text-center mr-2  text-black px-1.5 pb-0.5  bg-primary">
            +
          </span>
          Tạo suất diễn
        </button>
      </div>
    </div>
  );
}

export default Step2;
