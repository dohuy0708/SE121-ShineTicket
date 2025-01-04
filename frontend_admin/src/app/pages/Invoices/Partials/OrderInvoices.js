import React from "react";
import { editOrder } from "../services/invoiceService";
import { toast } from "react-toastify";

const OrderInvoices = ({ invoices, refresh }) => {
  // Bản đồ trạng thái
  const statusTextMap = {
    "675ea35c101067cb13679b52": "Chờ xử lý",
    "675ea365101067cb13679b55": "Đã xác nhận",
    "675ea36b101067cb13679b57": "Đã hủy",
  };

  // Bản đồ màu sắc
  const statusColorMap = {
    "675ea35c101067cb13679b52": "text-yellow-500", // Chờ xử lý
    "675ea365101067cb13679b55": "text-green-500", // Đã xác nhận
    "675ea36b101067cb13679b57": "text-red-500", // Đã hủy
  };
  const handleOrderCompletion = async (orderId) => {
    if (orderId) {
      try {
        await editOrder(orderId, "675ea365101067cb13679b55"); // Cập nhật trạng thái thành đã thanh toán
        toast.success("Thanh toán thành công!");
        refresh();
      } catch (error) {
        toast.error("Không thể hoàn tất thanh toán!");
      }
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg mt-4">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2 text-left">STT</th>
            <th className="px-4 py-2 text-left">Tên sự kiện</th>
            <th className="px-4 py-2 text-left">Người mua</th>
            <th className="px-4 py-2 text-left">Số tiền</th>
            <th className="px-4 py-2 text-left">Ngày thanh toán</th>
            <th className="px-4 py-2 text-left">Trạng thái</th>
            <th className="px-4 py-2 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, index) => (
            <tr key={invoice._id} className="hover:bg-gray-50">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{invoice?.event_name}</td>
              <td className="px-4 py-2">{invoice?.user_id?.username}</td>
              <td className="px-4 py-2">
                {parseFloat(invoice?.total_amount).toLocaleString()} VND
              </td>
              <td className="px-4 py-2">
                {new Date(invoice?.order_date).toLocaleDateString("vi-VN", {
                  timeZone: "UTC",
                  hour: "2-digit",
                  minute: "2-digit",
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </td>
              <td
                className={`px-4 py-2 font-semibold ${
                  statusColorMap[invoice?.order_status_id] || "text-gray-500"
                }`}
              >
                {statusTextMap[invoice?.order_status_id] || "Không xác định"}
              </td>
              <td>
                {invoice?.order_status_id === "675ea35c101067cb13679b52" ? (
                  <button
                    className="bg-primary px-2 py-1 rounded-lg"
                    onClick={() => handleOrderCompletion(invoice._id)}
                  >
                    Thanh toán
                  </button>
                ) : (
                  ""
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderInvoices;
