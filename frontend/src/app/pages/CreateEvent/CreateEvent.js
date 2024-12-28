import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Step1 from "./Partials/Step1";
import Step2 from "./Partials/Step2";
import Step3 from "./Partials/Step3";

function CreateEvent() {
  const nav = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    step1: {}, // Dữ liệu của bước 1
    step2: {}, // Dữ liệu của bước 2
    step3: {}, // Dữ liệu của bước 3
  });
  const [visitedSteps, setVisitedSteps] = useState(new Set([1]));

  const handleNextStep = () => {
    if (currentStep === 3) {
      nav("/my-events");
    }
    setVisitedSteps((prev) => new Set([...prev, currentStep + 1]));
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleStepClick = (step) => {
    if (visitedSteps.has(step)) {
      setCurrentStep(step);
    }
  };

  // Hàm cập nhật dữ liệu khi có thay đổi từ các bước
  const updateFormData = (step, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [step]: data,
    }));
  };

  return (
    <div className="flex-1 bg-black mx-auto">
      <div className="flex items-center text-2xl pl-4 h-16 bg-bg-main border-b-2 border-[#A19393] font-semibold text-white ">
        Tạo sự kiện
      </div>

      {/* Steps Indicator */}

      <div className="flex items-center justify-between px-6 py-2  mb-4 border-b-2 border-[#A19393] space-x-6">
        <div className="flex items-center space-x-6">
          <Step
            label="Thông tin sự kiện"
            stepNumber={1}
            isActive={currentStep >= 1}
            onClick={() => handleStepClick(1)}
          />
          <Step
            label="Thời gian & loại vé"
            stepNumber={2}
            isActive={currentStep >= 2}
            onClick={() => handleStepClick(2)}
          />
          <Step
            label="Thông tin thanh toán"
            stepNumber={3}
            isActive={currentStep >= 3}
            onClick={() => handleStepClick(3)}
          />
        </div>
        <div className=" space-x-2">
          <button className="ml-auto  w-24 px-4 py-2 bg-white text-black font-semibold rounded">
            Lưu
          </button>
          <button
            onClick={handleNextStep}
            className="ml-auto w-24 px-4 py-2 bg-primary   text-white font-semibold rounded"
          >
            Tiếp tục
          </button>
        </div>
      </div>

      {/* Step Content */}
      {currentStep === 1 && (
        <Step1
          data={formData.step1}
          updateData={(data) => updateFormData("step1", data)}
        />
      )}
      {currentStep === 2 && (
        <Step2
          data={formData.step2}
          updateData={(data) => updateFormData("step2", data)}
        />
      )}
      {currentStep === 3 && (
        <Step3
          data={formData.step3}
          updateData={(data) => updateFormData("step3", data)}
        />
      )}
    </div>
  );
}

function Step({ label, stepNumber, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center space-x-2  cursor-pointer ${
        isActive ? "text-primary" : "text-gray-400"
      }`}
    >
      <span
        className={`w-7 h-7 rounded-full flex items-center justify-center ${
          isActive ? "bg-primary" : "bg-gray-600"
        } text-white font-semibold`}
      >
        {stepNumber}
      </span>
      <span>{label}</span>
    </div>
  );
}

export default CreateEvent;
