import React from "react";

const PaymentEventList = ({ events, onPay, onViewDetails, onSearch }) => {
  return (
    <div className="bg-white shadow-md rounded-lg mt-4">
      <div className="p-4">
        <input
          type="text"
          placeholder="Tìm sự kiện..."
          className="border px-4 py-2 rounded-lg w-full"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2 text-left">Tên sự kiện</th>
            <th className="px-4 py-2 text-left">Ngày kết thúc</th>
            <th className="px-4 py-2 text-left">Số tiền cần thanh toán</th>
            <th className="px-4 py-2 text-left">Thông tin thanh toán</th>
            <th className="px-4 py-2 text-left">Trạng thái thanh toán</th>
            <th className="px-4 py-2 text-center">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2">{event.name}</td>
              <td className="px-4 py-2">{event.endDate}</td>
              <td className="px-4 py-2">{event.paymentAmount} VND</td>
              <td className="px-4 py-2">{event.paymentInfo}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded-lg ${
                    event.paymentStatus === "Chưa thanh toán"
                      ? "bg-red-500 text-white"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {event.paymentStatus}
                </span>
              </td>
              <td className="px-4 py-2 text-center">
                {event.paymentStatus === "Chưa thanh toán" && (
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    onClick={() => onPay(event)}
                  >
                    Thanh toán
                  </button>
                )}
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => onViewDetails(event)}
                >
                  Xem chi tiết
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentEventList;
