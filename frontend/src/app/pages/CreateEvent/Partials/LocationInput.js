import React, { useEffect, useState } from "react";
import { sEvent2 } from "../eventStore";
import axios from "axios";
import FormSection from "./FormSection";

export default function LocationInput() {
  const eventInfo = sEvent2.use();
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  // State để lưu mã code của địa điểm
  const [selectedCodes, setSelectedCodes] = useState({
    cityCode: "",
    districtCode: "",
    wardCode: "",
  });

  // Fetch danh sách tỉnh/thành
  useEffect(() => {
    axios
      .get("https://provinces.open-api.vn/api/p/")
      .then((response) => {
        setProvinces(response.data);
      })
      .catch((error) => console.error("Error fetching provinces:", error));
  }, []);

  // Fetch danh sách quận/huyện dựa trên tỉnh/thành được chọn
  useEffect(() => {
    if (selectedCodes.cityCode) {
      axios
        .get(
          `https://provinces.open-api.vn/api/p/${selectedCodes.cityCode}?depth=2`
        )
        .then((response) => {
          setDistricts(response.data.districts);
          setWards([]); // Reset danh sách phường/xã
          // Reset giá trị quận/huyện và phường/xã trong store
          sEvent2.set((pre) => {
            pre.value.district = "";
            pre.value.ward = "";
            return pre;
          });
          // Reset mã code quận/huyện và phường/xã
          setSelectedCodes((prev) => ({
            ...prev,
            districtCode: "",
            wardCode: "",
          }));
        })
        .catch((error) => console.error("Error fetching districts:", error));
    }
  }, [selectedCodes.cityCode]);

  // Fetch danh sách phường/xã dựa trên quận/huyện được chọn
  useEffect(() => {
    if (selectedCodes.districtCode) {
      axios
        .get(
          `https://provinces.open-api.vn/api/d/${selectedCodes.districtCode}?depth=2`
        )
        .then((response) => {
          setWards(response.data.wards);
          // Reset giá trị phường/xã trong store
          sEvent2.set((pre) => {
            pre.value.ward = "";
            return pre;
          });
          // Reset mã code phường/xã
          setSelectedCodes((prev) => ({
            ...prev,
            wardCode: "",
          }));
        })
        .catch((error) => console.error("Error fetching wards:", error));
    }
  }, [selectedCodes.districtCode]);

  // Xử lý thay đổi loại sự kiện (online/offline)
  const handleEventTypeChange = (e) => {
    sEvent2.set((pre) => {
      pre.value.event_format = e.target.value;
      // Reset tất cả giá trị địa điểm khi chuyển loại sự kiện
      if (e.target.value === "online") {
        pre.value.venue_name = "";
        pre.value.city = "";
        pre.value.district = "";
        pre.value.ward = "";
        pre.value.street_name = "";
        setSelectedCodes({
          cityCode: "",
          districtCode: "",
          wardCode: "",
        });
      }
      return pre;
    });
  };

  // Xử lý khi chọn tỉnh/thành
  const handleProvinceChange = (e) => {
    const selectedProvince = provinces.find(
      (p) => p.code === Number(e.target.value)
    );
    if (selectedProvince) {
      setSelectedCodes((prev) => ({
        ...prev,
        cityCode: selectedProvince.code,
      }));
      sEvent2.set((pre) => {
        pre.value.city = selectedProvince.name;
        return pre;
      });
    } else {
      setSelectedCodes((prev) => ({
        ...prev,
        cityCode: "",
      }));
      sEvent2.set((pre) => {
        pre.value.city = "";
        return pre;
      });
    }
  };

  // Xử lý khi chọn quận/huyện
  const handleDistrictChange = (e) => {
    const selectedDistrict = districts.find(
      (d) => d.code === Number(e.target.value)
    );
    if (selectedDistrict) {
      setSelectedCodes((prev) => ({
        ...prev,
        districtCode: selectedDistrict.code,
      }));
      sEvent2.set((pre) => {
        pre.value.district = selectedDistrict.name;
        return pre;
      });
    } else {
      setSelectedCodes((prev) => ({
        ...prev,
        districtCode: "",
      }));
      sEvent2.set((pre) => {
        pre.value.district = "";
        return pre;
      });
    }
  };

  // Xử lý khi chọn phường/xã
  const handleWardChange = (e) => {
    const selectedWard = wards.find((w) => w.code === Number(e.target.value));
    if (selectedWard) {
      setSelectedCodes((prev) => ({
        ...prev,
        wardCode: selectedWard.code,
      }));
      sEvent2.set((pre) => {
        pre.value.ward = selectedWard.name;
        return pre;
      });
    } else {
      setSelectedCodes((prev) => ({
        ...prev,
        wardCode: "",
      }));
      sEvent2.set((pre) => {
        pre.value.ward = "";
        return pre;
      });
    }
  };

  return (
    <FormSection title="Địa chỉ sự kiện">
      <div className="flex items-center mb-2 text-white">
        <label className="flex items-center mr-4">
          <input
            type="radio"
            name="locationType"
            value="offline"
            checked={eventInfo.event_format === "offline"}
            onChange={handleEventTypeChange}
            className="mr-1"
          />
          Sự kiện offline
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="locationType"
            value="online"
            checked={eventInfo.event_format === "online"}
            onChange={handleEventTypeChange}
            className="mr-1"
          />
          Sự kiện online
        </label>
      </div>

      {eventInfo.event_format === "offline" && (
        <div>
          <label className="text-white">
            <span className="text-[#C83030] font-bold text-lg">* </span>Tên địa
            điểm
            <input
              type="text"
              className="w-full p-2 mt-2 bg-white outline-none text-black border border-gray-600 rounded mb-4"
              value={eventInfo.venue_name}
              onChange={(e) =>
                sEvent2.set((pre) => {
                  pre.value.venue_name = e.target.value;
                  return pre;
                })
              }
            />
          </label>

          <div className="grid grid-cols-2 gap-4">
            <label className="text-white">
              <span className="text-[#C83030] font-bold text-lg">* </span>
              Tỉnh/Thành
              <select
                className="p-2 w-full mt-2 bg-white text-black outline-none border border-gray-600 rounded"
                value={selectedCodes.cityCode}
                onChange={handleProvinceChange}
              >
                <option value="">Chọn Tỉnh/Thành</option>
                {provinces.map((province) => (
                  <option key={province.code} value={province.code}>
                    {province.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="text-white">
              <span className="text-[#C83030] font-bold text-lg">* </span>
              Quận/Huyện
              <select
                className="p-2 w-full mt-2 bg-white text-black outline-none border border-gray-600 rounded"
                value={selectedCodes.districtCode}
                onChange={handleDistrictChange}
                disabled={!selectedCodes.cityCode}
              >
                <option value="">Chọn Quận/Huyện</option>
                {districts.map((district) => (
                  <option key={district.code} value={district.code}>
                    {district.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="text-white">
              <span className="text-[#C83030] font-bold text-lg">* </span>
              Phường/Xã
              <select
                className="p-2 w-full mt-2 bg-white text-black outline-none border border-gray-600 rounded"
                value={selectedCodes.wardCode}
                onChange={handleWardChange}
                disabled={!selectedCodes.districtCode}
              >
                <option value="">Chọn Phường/Xã</option>
                {wards.map((ward) => (
                  <option key={ward.code} value={ward.code}>
                    {ward.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="text-white">
              <span className="text-[#C83030] font-bold text-lg">* </span>
              Số nhà, đường
              <input
                type="text"
                className="p-2 w-full mt-2 bg-white text-black outline-none border border-gray-600 rounded"
                value={eventInfo.street_name}
                onChange={(e) =>
                  sEvent2.set((pre) => {
                    pre.value.street_name = e.target.value;
                    return pre;
                  })
                }
              />
            </label>
          </div>
        </div>
      )}
    </FormSection>
  );
}
