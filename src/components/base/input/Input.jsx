import React from "react";

export default function Input({ type, id, onChange }) {
  return (
    <div>
      <input
        type={type}
        id={id}
        onChange={onChange}
        className="border border-gray-300 rounded-md p-2 w-full mt-1 focus:outline-none"
      />
    </div>
  );
}
