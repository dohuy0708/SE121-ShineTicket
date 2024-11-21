import React, { useState } from "react";
import UploadBox from "./UploadBox";
import MyEditor from "./MyEditor";
export default function Step1() {
  const [logo, setLogo] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [organizerLogo, setOrganizerLogo] = useState(null);
  const [eventType, setEventType] = useState("offline");

  const handleEventTypeChange = (e) => {
    setEventType(e.target.value);
  };
  const handleFileChange = (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      {/* Upload Logo and Background */}
      <FormSection title={"Upload hình ảnh"}>
        <div className=" space-x-4 grid grid-cols-4">
          <UploadBox
            wi="col-span-1"
            he="h-[26.25rem]"
            label="Thêm logo sự kiện"
            size="720x985"
            image={logo}
            onChange={(e) => handleFileChange(e, setLogo)}
          />
          <UploadBox
            wi="col-span-3"
            he="h-[26.25rem]"
            label="Thêm ảnh nền sự kiện"
            size="1280x720"
            image={backgroundImage}
            onChange={(e) => handleFileChange(e, setBackgroundImage)}
          />
        </div>
      </FormSection>

      {/* Event Details Form */}
      <FormSection title="Tên sự kiện">
        <input
          type="text"
          className="w-full p-2 bg-white outline-none border border-gray-600 rounded"
        />
      </FormSection>

      <FormSection title="Địa chỉ sự kiện">
        <div className="flex items-center mb-2  text-white">
          <label className="flex items-center mr-4 ">
            <input
              type="radio"
              name="locationType"
              value="offline"
              checked={eventType === "offline"}
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
              checked={eventType === "online"}
              onChange={handleEventTypeChange}
              className="mr-1"
            />{" "}
            Sự kiện online
          </label>
        </div>
        {eventType === "offline" && (
          <div>
            <label className="text-white">
              <span className="text-[#C83030] font-bold text-lg">* </span>Tên
              địa điểm{" "}
              <input
                type="text"
                className="w-full p-2 mt-2 bg-white outline-none text-black border border-gray-600 rounded mb-4"
              />
            </label>

            <div className="grid grid-cols-2 gap-4">
              <label className="text-white">
                <span className="text-[#C83030] font-bold text-lg">* </span>{" "}
                Tỉnh/Thành
                <br />
                <input
                  type="text"
                  className="p-2 w-full mt-2 bg-white text-black outline-none border border-gray-600 rounded"
                />
              </label>
              <label className="text-white">
                Quận/Huyện
                <br />
                <input
                  type="text"
                  className="p-2 w-full mt-2 bg-white text-black outline-none border border-gray-600 rounded"
                />
              </label>
              <label className="text-white">
                Phường/Xã
                <br />
                <input
                  type="text"
                  className="p-2 w-full mt-2 bg-white text-black outline-none border border-gray-600 rounded"
                />
              </label>
              <label className="text-white">
                <span className="text-[#C83030] font-bold text-lg">* </span> Số
                nhà, đường
                <br />
                <input
                  type="text"
                  className="p-2 w-full mt-2 bg-white text-black outline-none border border-gray-600 rounded"
                />
              </label>
            </div>
          </div>
        )}
      </FormSection>

      <FormSection title="Thể loại sự kiện">
        <input
          type="text"
          className="w-full p-2 bg-white outline-none border border-gray-600 rounded"
        />
      </FormSection>

      <FormSection title="Thông tin sự kiện">
        {/* <textarea
          className="w-full p-2 bg-white outline-none border border-gray-600 rounded h-24"
          placeholder="// phần soạn thảo văn bản"
        ></textarea> */}
        <MyEditor />
      </FormSection>
      <FormSection>
        <div className=" space-x-4 grid grid-cols-6">
          <UploadBox
            wi="col-span-1"
            he="h-[13.75rem]"
            label="Thêm logo ban tổ chức"
            size="720x985"
            image={organizerLogo}
            onChange={(e) => handleFileChange(e, setOrganizerLogo)}
          />
          <div className="flex-1 space-y-2 col-span-5">
            <label className="text-white">
              <span className="text-[#C83030] font-bold text-lg">* </span>Tên
              ban tổ chức
              <br />
              <input
                type="text"
                className="w-full mt-2 p-2 mb-4 bg-white  text-black outline-none border border-gray-600 rounded"
              />
            </label>
            <label className="text-white">
              <span className="text-[#C83030] font-bold text-lg">* </span> Thông
              tin ban tổ chức
              <br />
              <textarea className="w-full mt-2 p-2 bg-white  text-black outline-none border border-gray-600 rounded h-24"></textarea>
            </label>
          </div>
        </div>
      </FormSection>
    </div>
  );

  function FormSection({ title, children }) {
    return (
      <div className="bg-bg-main px-6 py-4 mx-6 rounded-xl space-y-4">
        {title && <span className="text-[#C83030] font-bold text-lg">* </span>}
        <label className="text-white font-semibold">{title}</label>
        {children}
      </div>
    );
  }
}
