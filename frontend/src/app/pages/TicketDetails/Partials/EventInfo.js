import React from "react";

export default function EventInfo({ event }) {
  return (
    <div className="bg-white mx-4  rounded-xl mb-4">
      <div className="px-6">
        <div className="p-4">{event?.description}</div>
      </div>
    </div>
  );
}
