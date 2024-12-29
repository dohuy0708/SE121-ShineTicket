import React, { useEffect, useState } from "react";
import { sEvent2 } from "../eventStore";
import FormSection from "./FormSection";
import UploadBox from "./UploadBox";
import { getEventType } from "../services/eventService";
export default function BasicInput() {
  const eventInfo = sEvent2.use();
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true); // State hiển thị loading
  const [error, setError] = useState(null); // State lưu lỗi nếu có
  useEffect(() => {
    const fetchEventTypes = async () => {
      try {
        const data = await getEventType(); // Gọi API từ service
        setTypes(data); // Lưu kết quả vào state
      } catch (err) {
        setError(err);
        setTypes([
          {
            _id: "675ea2da3f6438a553ef0afe",
            type_name: "Nhạc sống",
          },
          {
            _id: "675ea2f53f6438a553ef0b00",
            type_name: "Sân khấu & Nghệ thuật",
          },
          {
            _id: "675ea2fc3f6438a553ef0b02",
            type_name: "Thể thao",
          },
          {
            _id: "675ea3013f6438a553ef0b04",
            type_name: "Workshop",
          },
          {
            _id: "675ea3083f6438a553ef0b06",
            type_name: "Khác",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchEventTypes();
  }, []);

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        sEvent2.set((prev) => {
          prev.value[field] = reader.result; // Cập nhật trực tiếp vào Signify store
        });
      };
      reader.readAsDataURL(file);
    }
  };
  // if (loading) return <p>Loading event types...</p>;
  // if (error) return <p>Error loading event types: {error.message}</p>;
  return (
    <div className="space-y-6">
      <FormSection title={"Upload hình ảnh"}>
        <div className="space-x-4 grid grid-cols-4">
          <UploadBox
            wi="col-span-1"
            he="h-[26.25rem]"
            label="Thêm logo sự kiện"
            size="720x985"
            image={eventInfo.logo_url}
            onChange={(e) => handleFileChange(e, "logo_url")}
          />
          <UploadBox
            wi="col-span-3"
            he="h-[26.25rem]"
            label="Thêm ảnh nền sự kiện"
            size="1280x720"
            image={eventInfo.cover_image_url}
            onChange={(e) => handleFileChange(e, "cover_image_url")}
          />
        </div>
      </FormSection>
      {/* Event Details Form */}
      <FormSection title="Tên sự kiện">
        <input
          type="text"
          className="w-full p-2 bg-white outline-none border border-gray-600 rounded"
          value={eventInfo.event_name}
          onChange={(e) => {
            sEvent2.set((pre) => {
              pre.value.event_name = e.target.value;
            });
          }}
        />
      </FormSection>
      <FormSection title="Thể loại sự kiện">
        <select
          className="w-full p-2 bg-white outline-none border border-gray-600 rounded text-black"
          value={eventInfo.event_type_id}
          onChange={(e) =>
            sEvent2.set((pre) => {
              pre.value.event_type_id = e.target.value;
            })
          }
        >
          <option value="">Chọn thể loại sự kiện</option>
          {types.map((type) => (
            <option key={type._id} value={type._id}>
              {type.type_name}
            </option>
          ))}
        </select>
      </FormSection>
    </div>
  );
}
