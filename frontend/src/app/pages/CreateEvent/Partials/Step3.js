import React from "react";

export default function Step3() {
  return (
    <div className="p-4">
      <div className="bg-bg-main text-white rounded-lg p-4">
        <h2 className="font-semibold text-xl mb-4">Thông tin thanh toán</h2>
        <p className="mb-2 text-primary">
          Chúng tôi sẽ chuyển tiền đến số tài khoản của bạn
        </p>
        <p className="mb-2">
          Tiền bán vé (sau khi trừ phí dịch vụ cho ShineTicket) sẽ vào tài khoản
          của bạn sau khi các nhận sale report từ 7-10 ngày. Nếu bạn muốn nhận
          được tiền sớm hơn, vui lòng liên hệ chúng tôi qua số 19001009 hoặc
          contact@shineticket.vn
        </p>
        <div className="flex flex-col gap-y-4 mt-6 mb-10">
          <div className="grid grid-cols-10 items-center">
            <span className="font-semibold col-span-1">Chủ tài khoản:</span>
            <input
              className="rounded-lg text-black p-2 col-span-8"
              type="text"
            />
          </div>
          <div className="grid grid-cols-10 items-center">
            <span className="font-semibold col-span-1">Số tài khoản:</span>
            <input
              className="rounded-lg text-black p-2 col-span-8"
              type="text"
            />
          </div>
          <div className="grid grid-cols-10 items-center">
            <span className="font-semibold col-span-1">Tên ngân hàng:</span>
            <input
              className="rounded-lg text-black p-2 col-span-8"
              type="text"
            />
          </div>
          <div className="grid grid-cols-10 items-center">
            <span className="font-semibold col-span-1">Chi nhánh:</span>
            <input
              className="rounded-lg text-black p-2 col-span-8"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
