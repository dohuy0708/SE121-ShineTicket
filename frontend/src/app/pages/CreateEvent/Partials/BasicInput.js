import React from "react";
import { sEvent2 } from "../eventStore";
import FormSection from "./FormSection";
import UploadBox from "./UploadBox";
export default function BasicInput() {
  const eventInfo = sEvent2.use();
  const types = [
    {
      id: 1,
      type_name: "Nhạc sống",
    },
    {
      id: 2,
      type_name: "Sân khấu & Nghệ thuật",
    },
    {
      id: 3,
      type_name: "Thể thao",
    },
    {
      id: 4,
      type_name: "Khác",
    },
  ];
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
            <option key={type.id} value={type.id}>
              {type.type_name}
            </option>
          ))}
        </select>
      </FormSection>
    </div>
  );
}
