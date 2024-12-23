import React from "react";
import FormSection from "./FormSection";
import UploadBox from "./UploadBox";
import { sEvent2 } from "../eventStore";

export default function OrganizerInput() {
  const eventInfo = sEvent2.use();
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
    <FormSection>
      <div className="space-x-4 grid grid-cols-6">
        <UploadBox
          wi="col-span-1"
          he="h-[13.75rem]"
          label="Thêm logo ban tổ chức"
          size="720x985"
          image={eventInfo.organizer_logo} // Lấy từ Signify store
          onChange={(e) => handleFileChange(e, "organizer_logo")} // Truyền tên trường cần cập nhật
        />
        <div className="flex-1 space-y-2 col-span-5">
          <label className="text-white">
            <span className="text-[#C83030] font-bold text-lg">* </span>Tên ban
            tổ chức
            <br />
            <input
              type="text"
              className="w-full mt-2 p-2 mb-4 bg-white text-black outline-none border border-gray-600 rounded"
              value={eventInfo.organizer_name}
              onChange={(e) =>
                sEvent2.set(
                  (pre) => (pre.value.organizer_name = e.target.value)
                )
              }
            />
          </label>
          <label className="text-white">
            <span className="text-[#C83030] font-bold text-lg">* </span>
            Thông tin ban tổ chức
            <br />
            <textarea
              className="w-full mt-2 p-2 bg-white text-black outline-none border border-gray-600 rounded h-20"
              value={eventInfo.organizer_info}
              onChange={(e) =>
                sEvent2.set(
                  (pre) => (pre.value.organizer_info = e.target.value)
                )
              }
            ></textarea>
          </label>
        </div>
      </div>
    </FormSection>
  );
}
