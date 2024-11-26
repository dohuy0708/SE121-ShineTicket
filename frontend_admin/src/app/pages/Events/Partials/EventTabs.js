import React from "react";

const EventTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["Đang chờ duyệt", "Đã duyệt", "Bị từ chối"];

  return (
    <div className="flex space-x-4 border-b border-gray-200">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`px-4 py-2 ${
            activeTab === index
              ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default EventTabs;
