import React from "react";

export default function SendData({ value, handler }) {
  return (
    <div className="w-full h-10 bg-teal-400 text-white flex items-center justify-center  rounded-lg mt-4">
      <input
        type="submit"
        value={value}
        className="cursor-pointer"
        onClick={handler}
      />
    </div>
  );
}
