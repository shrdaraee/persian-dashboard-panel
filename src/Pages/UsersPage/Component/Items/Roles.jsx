import React from "react";

export default function Roles({ role }) {
  return (
    <>
      <div className="text-zinc-500  flex items-center">
        <button
          className={
            role == "ادمین"
              ? "bg-teal-400 text-teal-50 rounded-lg px-2 py-2.5 w-28"
              : "bg-rose-400 text-teal-50 rounded-lg px-2 py-2.5 w-28"
          }
        >
          {role}
        </button>
      </div>
    </>
  );
}
