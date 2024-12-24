import React from "react";
import FormSection from "./FormSection";
import { sOrg } from "../eventStore";

export default function OrganizerInput() {
  const orgInfo = sOrg.use();

  return (
    <FormSection>
      <div className="">
        <div className="flex-1 space-y-2  ">
          <label className="text-white">
            <span className="text-[#C83030] font-bold text-lg">* </span>Tên ban
            tổ chức
            <br />
            <input
              type="text"
              className="w-full mt-2 p-2 mb-4 bg-white text-black outline-none border border-gray-600 rounded"
              value={orgInfo.organizer_name}
              onChange={(e) =>
                sOrg.set((pre) => (pre.value.organizer_name = e.target.value))
              }
            />
          </label>
          <div className="grid grid-cols-2 gap-4">
            <label className="text-white">
              <span className="text-[#C83030] font-bold text-lg">* </span>
              Email ban tổ chức
              <br />
              <input
                type="text"
                className="w-full mt-2 p-2 mb-4 bg-white text-black outline-none border border-gray-600 rounded"
                value={orgInfo.organizer_email}
                onChange={(e) =>
                  sOrg.set(
                    (pre) => (pre.value.organizer_email = e.target.value)
                  )
                }
              />
            </label>
            <label className="text-white">
              <span className="text-[#C83030] font-bold text-lg">* </span>
              SĐT ban tổ chức
              <br />
              <input
                type="text"
                className="w-full mt-2 p-2 mb-4 bg-white text-black outline-none border border-gray-600 rounded"
                value={orgInfo.organizer_phone_number}
                onChange={(e) =>
                  sOrg.set(
                    (pre) => (pre.value.organizer_phone_number = e.target.value)
                  )
                }
              />
            </label>
          </div>
          <label className="text-white">
            <span className="text-[#C83030] font-bold text-lg">* </span>
            Thông tin ban tổ chức
            <br />
            <textarea
              className="w-full mt-2 p-2 bg-white text-black outline-none border border-gray-600 rounded h-20"
              value={orgInfo.organizer_info}
              onChange={(e) =>
                sOrg.set((pre) => (pre.value.organizer_info = e.target.value))
              }
            ></textarea>
          </label>
        </div>
      </div>
    </FormSection>
  );
}
