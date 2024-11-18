import React from "react";

const PaymentInfo = () => {
  return (
    <div className=" text-white p-4 rounded-lg space-y-4 mr-4">
      <div className="flex justify-between items-center text-yellow-500 font-bold">
        <h2>THANH TOÁN</h2>
        <h2>Chọn lại vé</h2>
      </div>
      <div className="bg-bg-main p-4 rounded-lg">
        <h3 className="text-yellow-500 font-bold mb-2">Thông tin nhận vé</h3>
        <p>Lê Huy Hoàng 0987654321</p>
        <p>22520562@gm.uit.edu.vn</p>
        <button className="text-yellow-500 text-sm mt-2">Sửa thông tin</button>
      </div>
      <div className="bg-bg-main p-4 rounded-lg">
        <h3 className="text-yellow-500 font-bold mb-2">
          Phương thức thanh toán
        </h3>
        <div className="flex items-center">
          <input type="radio" id="momo" name="payment" className="mr-2" />
          <label htmlFor="momo" className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png"
              alt="Momo"
              className="w-6 h-6 mr-2"
            />
            Ví momo
          </label>
        </div>
      </div>
    </div>
  );
};
export default PaymentInfo;
