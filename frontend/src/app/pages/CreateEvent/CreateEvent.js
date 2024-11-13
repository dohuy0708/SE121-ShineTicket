import React, { useState } from "react";

function CreateEvent() {
  const [eventType, setEventType] = useState("offline");
  const [logo, setLogo] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [organizerLogo, setOrganizerLogo] = useState(null);

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
    <div className=" flex-1 bg-black mx-auto">
      <div className="flex items-center text-2xl pl-4 h-16 bg-bg-main border-b-2 border-[#A19393] font-semibold text-white mb-4">
        Tạo sự kiện
      </div>

      {/* Steps */}
      <div className="flex items-center mb-4">
        <Step label="Thông tin sự kiện" stepNumber={1} />
        <Step label="Thời gian & loại vé" stepNumber={2} />
        <Step label="Thông tin thanh toán" stepNumber={3} />
        <button className="ml-auto px-4 py-2 bg-yellow-500 text-black font-semibold rounded">
          Lưu
        </button>
        <button className="ml-2 px-4 py-2 bg-orange-600 text-white font-semibold rounded">
          Tiếp tục
        </button>
      </div>

      {/* Form Content */}
      <div className="space-y-6">
        {/* Upload Logo and Background */}
        <div className="flex space-x-4">
          <UploadBox
            label="Thêm logo sự kiện"
            size="720x985"
            image={logo}
            onChange={(e) => handleFileChange(e, setLogo)}
          />
          <UploadBox
            label="Thêm ảnh nền sự kiện"
            size="1280x720"
            image={backgroundImage}
            onChange={(e) => handleFileChange(e, setBackgroundImage)}
          />
        </div>

        {/* Event Details Form */}
        <FormSection title="Tên sự kiện">
          <input
            type="text"
            className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
          />
        </FormSection>

        <FormSection title="Địa chỉ sự kiện">
          <div className="flex items-center mb-2">
            <label className="flex items-center mr-4">
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
              <input
                type="text"
                placeholder="Tên địa điểm"
                className="w-full p-2 bg-gray-800 border border-gray-600 rounded mb-2"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Tỉnh/Thành"
                  className="p-2 bg-gray-800 border border-gray-600 rounded"
                />
                <input
                  type="text"
                  placeholder="Quận/Huyện"
                  className="p-2 bg-gray-800 border border-gray-600 rounded"
                />
                <input
                  type="text"
                  placeholder="Phường/Xã"
                  className="p-2 bg-gray-800 border border-gray-600 rounded"
                />
                <input
                  type="text"
                  placeholder="Số nhà, đường"
                  className="p-2 bg-gray-800 border border-gray-600 rounded"
                />
              </div>
            </div>
          )}
        </FormSection>

        <FormSection title="Thể loại sự kiện">
          <input
            type="text"
            className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
          />
        </FormSection>

        <FormSection title="Thông tin sự kiện">
          <textarea
            className="w-full p-2 bg-gray-800 border border-gray-600 rounded h-24"
            placeholder="// phần soạn thảo văn bản"
          ></textarea>
        </FormSection>

        <div className="flex space-x-4">
          <UploadBox
            label="Thêm logo ban tổ chức"
            size="720x985"
            image={organizerLogo}
            onChange={(e) => handleFileChange(e, setOrganizerLogo)}
          />
          <div className="flex-1 space-y-2">
            <input
              type="text"
              placeholder="Tên ban tổ chức"
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
            />
            <input
              type="text"
              placeholder="Tên ban tổ chức"
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Step({ label, stepNumber }) {
  return (
    <div className="flex items-center space-x-2">
      <span className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-600 text-white font-semibold">
        {stepNumber}
      </span>
      <span>{label}</span>
    </div>
  );
}

function UploadBox({ label, size, image, onChange }) {
  return (
    <div className="w-1/2 h-48 border-dashed border-2 border-gray-600 flex flex-col items-center justify-center space-y-2 relative">
      {image ? (
        <img
          src={image}
          alt="Upload Preview"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <>
          <span className="text-4xl text-green-500">📷</span>
          <span>{label}</span>
          <span className="text-sm text-gray-400">({size})</span>
        </>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={onChange}
        className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
      />
    </div>
  );
}

function FormSection({ title, children }) {
  return (
    <div className="bg-gray-800 p-4 rounded space-y-2">
      <label className="text-red-500 font-semibold">{title}</label>
      {children}
    </div>
  );
}

export default CreateEvent;
