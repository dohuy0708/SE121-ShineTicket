import React, { useEffect, useState } from "react";
import { sEvent2 } from "../eventStore";
import axios from "axios";
import {
  fetchDistricts,
  fetchProvinces,
  fetchWards,
} from "../services/locationService";
import FormSection from "./FormSection";
export default function LocationInput() {
  const eventInfo = sEvent2.use();
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  // Fetch provinces
  useEffect(() => {
    axios
      .get("https://provinces.open-api.vn/api/p/") // API lấy danh sách tỉnh/thành
      .then((response) => {
        setProvinces(response.data);
      })
      .catch((error) => console.error("Error fetching provinces:", error));
  }, []);

  // Fetch districts based on selected province
  useEffect(() => {
    if (eventInfo.city) {
      axios
        .get(`https://provinces.open-api.vn/api/p/${eventInfo.city}?depth=2`) // API lấy quận/huyện theo tỉnh
        .then((response) => {
          setDistricts(response.data.districts);
          setWards([]); // Reset wards
          sEvent2.set((pre) => (pre.value.ward = ""));
        })
        .catch((error) => console.error("Error fetching districts:", error));
    }
  }, [eventInfo.city]);

  // Fetch wards based on selected district
  useEffect(() => {
    if (eventInfo.district) {
      axios
        .get(
          `https://provinces.open-api.vn/api/d/${eventInfo.district}?depth=2`
        ) // API lấy phường/xã theo quận
        .then((response) => {
          setWards(response.data.wards);
        })
        .catch((error) => console.error("Error fetching wards:", error));
    }
  }, [eventInfo.district]);

  const handleEventTypeChange = (e) => {
    sEvent2.set((pre) => {
      pre.value.event_format = e.target.value;
    });
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
          />{" "}
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
          />{" "}
          Sự kiện online
        </label>
      </div>
      {eventInfo.event_format === "offline" && (
        <div>
          <label className="text-white">
            <span className="text-[#C83030] font-bold text-lg">* </span>Tên địa
            điểm{" "}
            <input
              type="text"
              className="w-full p-2 mt-2 bg-white outline-none text-black border border-gray-600 rounded mb-4"
              value={eventInfo.venue_name}
              onChange={(e) =>
                sEvent2.set((pre) => (pre.value.venue_name = e.target.value))
              }
            />
          </label>
          <div className="grid grid-cols-2 gap-4">
            <label className="text-white">
              <span className="text-[#C83030] font-bold text-lg">* </span>
              Tỉnh/Thành
              <br />
              <sEvent2.Wrap>
                {(value) => (
                  <select
                    className="p-2 w-full mt-2 bg-white text-black outline-none border border-gray-600 rounded"
                    value={value.city}
                    onChange={(e) => {
                      sEvent2.set((pre) => (pre.value.city = e.target.value));
                    }}
                  >
                    <option value="">Chọn Tỉnh/Thành</option>
                    {provinces.map((province) => (
                      <option key={province.code} value={province.code}>
                        {province.name}
                      </option>
                    ))}
                  </select>
                )}
              </sEvent2.Wrap>
            </label>
            <label className="text-white">
              Quận/Huyện
              <br />
              <sEvent2.Wrap>
                {(value) => (
                  <select
                    className="p-2 w-full mt-2 bg-white text-black outline-none border border-gray-600 rounded"
                    value={value.district}
                    onChange={(e) => {
                      sEvent2.set(
                        (pre) => (pre.value.district = e.target.value)
                      );
                    }}
                    disabled={!value.city}
                  >
                    <option value="">Chọn Quận/Huyện</option>
                    {districts.map((district) => (
                      <option key={district.code} value={district.code}>
                        {district.name}
                      </option>
                    ))}
                  </select>
                )}
              </sEvent2.Wrap>
            </label>
            <label className="text-white">
              Phường/Xã
              <br />
              <select
                className="p-2 w-full mt-2 bg-white text-black outline-none border border-gray-600 rounded"
                value={eventInfo.ward}
                onChange={(e) => {
                  sEvent2.set((pre) => {
                    pre.value.ward = e.target.value;
                  });
                }}
                disabled={!eventInfo.district}
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
              <br />
              <input
                type="text"
                className="p-2 w-full mt-2 bg-white text-black outline-none border border-gray-600 rounded"
                value={eventInfo.street_name}
                onChange={(e) => {
                  sEvent2.set((pre) => {
                    pre.value.street_name = e.target.value;
                  });
                }}
              />
            </label>
          </div>
        </div>
      )}
    </FormSection>
  );
}
