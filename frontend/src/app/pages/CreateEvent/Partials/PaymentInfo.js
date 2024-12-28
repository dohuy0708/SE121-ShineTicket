import React, { useEffect, useState } from "react";
import { sEvent2 } from "../eventStore";
import getBanks from "../services/bankService"; // Đảm bảo bạn có service lấy ngân hàng

export default function PaymentInfo() {
  const eventInfo = sEvent2.use();
  const [banks, setBanks] = useState([]);
  const [selectedBank, setSelectedBank] = useState(eventInfo.bank_name);

  useEffect(() => {
    // Fetch danh sách ngân hàng khi component được render
    const fetchBanks = async () => {
      try {
        const bankList = await getBanks();
        // Sắp xếp ngân hàng theo mã ngân hàng (code)
        const sortedBanks = bankList.data.sort((a, b) =>
          a.code.localeCompare(b.code)
        );
        setBanks(sortedBanks); // Cập nhật danh sách ngân hàng đã sắp xếp vào state
      } catch (error) {
        console.error("Error fetching banks:", error);
      }
    };

    fetchBanks();
  }, []);

  const handleBankChange = (e) => {
    const selected = e.target.value;
    setSelectedBank(selected);
    sEvent2.set((prev) => ({ ...prev.value, bank_name: selected }));
  };

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
              value={eventInfo.owner_name}
              onChange={(e) =>
                sEvent2.set((pre) => (pre.value.owner_name = e.target.value))
              }
            />
          </div>
          <div className="grid grid-cols-10 items-center">
            <span className="font-semibold col-span-1">Số tài khoản:</span>
            <input
              className="rounded-lg text-black p-2 col-span-8"
              type="text"
              value={eventInfo.account_number}
              onChange={(e) =>
                sEvent2.set(
                  (pre) => (pre.value.account_number = e.target.value)
                )
              }
            />
          </div>
          <div className="grid grid-cols-10 items-center">
            <span className="font-semibold col-span-1">Tên ngân hàng:</span>
            <select
              className="rounded-lg text-black p-2 col-span-8 bg-white border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              value={selectedBank}
              onChange={handleBankChange}
            >
              <option value="">Chọn ngân hàng</option>
              {banks.length > 0 ? (
                banks.map((bank) => (
                  <option key={bank.code} value={bank.name}>
                    {bank.code} - {bank.name}{" "}
                    {/* Hiển thị mã ngân hàng và tên */}
                  </option>
                ))
              ) : (
                <option>Đang tải danh sách ngân hàng...</option>
              )}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
