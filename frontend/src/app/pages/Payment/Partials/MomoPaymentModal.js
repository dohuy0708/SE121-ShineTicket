import React from "react";

const MomoPaymentModal = ({ isOpen, onClose, amount, children }) => {
  if (!isOpen) return null;

  const steps = [
    "Mở ứng dụng Momo trên điện thoại",
    "Trên Momo, chọn biểu tượng quét mã QR",
    "Quét mã QR ở trang này và thanh toán",
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6 relative">
        <div className="flex items-center justify-between mb-6 pb-6 border-b border-black">
          <div className="flex items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png"
              alt="Momo"
              className="w-6 h-6 mr-2"
            />
            <h2 className="text-lg font-semibold">Thanh toán bằng ví Momo</h2>
          </div>
          <button
            onClick={onClose}
            className="text-black font-bold hover:text-gray-700 mt-[-10px]"
          >
            X
          </button>
        </div>
        <div className="flex ">
          <div className="mb-6 mr-6">
            <div className="bg-gray-100 h-56 w-56 mx-auto flex items-center justify-center">
              <p className="text-gray-500">QR Code Placeholder</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold mb-4">Quét mã QR để thanh toán</h3>
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
                  {index + 1}
                </div>
                <p>{step}</p>
              </div>
            ))}
            <p className="mt-16">
              Tổng tiền:{" "}
              <span className="font-bold">{amount.toLocaleString()}đ</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MomoPaymentModal;
