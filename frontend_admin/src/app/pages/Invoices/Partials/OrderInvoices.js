import React from "react";

const OrderInvoices = ({ invoices }) => {
  return (
    <div className="bg-white shadow-md rounded-lg mt-4">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2 text-left">Mã hóa đơn</th>
            <th className="px-4 py-2 text-left">Tên sự kiện</th>
            <th className="px-4 py-2 text-left">Người mua</th>
            <th className="px-4 py-2 text-left">Số tiền</th>
            <th className="px-4 py-2 text-left">Ngày thanh toán</th>
            <th className="px-4 py-2 text-left">Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2">{invoice.id}</td>
              <td className="px-4 py-2">{invoice.eventName}</td>
              <td className="px-4 py-2">{invoice.buyerName}</td>
              <td className="px-4 py-2">{invoice.paymentAmount} VND</td>
              <td className="px-4 py-2">{invoice.paymentDate}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded-lg ${
                    invoice.status === "Đã thanh toán"
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {invoice.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderInvoices;
