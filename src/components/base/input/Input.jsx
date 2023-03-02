import React from "react";

export default function Input({ type, name, id, onChange }) {
  return (
    <div>
      <input
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        className="border border-gray-300 rounded-md p-2 w-full mt-1 focus:outline-none"
        required
      />
    </div>
  );
}
