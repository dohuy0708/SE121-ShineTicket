import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import RowEvent from "./EventRow";

const EventList = ({ events, onViewDetails }) => {
  return (
    <div className="bg-white shadow-md rounded-lg mt-4">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2 text-left">Tên sự kiện</th>
            <th className="px-4 py-2 text-left">Bắt đầu</th>
            <th className="px-4 py-2 text-left">Kết thúc</th>
            <th className="px-4 py-2 text-left">Trạng thái</th>
            <th className="px-4 py-2 text-center"></th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <RowEvent event={event} onViewDetails={onViewDetails} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventList;
