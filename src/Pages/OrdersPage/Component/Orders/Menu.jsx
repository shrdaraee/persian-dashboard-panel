import React from "react";

export default function Menu() {
  const titles = [
    { name: "مشخصات ", style: "md:mr-6 mr-3" },
    { name: " سفارشات", style: "md:mr-6 mr-6 col-span-2  " },
    { name: " تاریخ", style: "md:mr-2 mr-5" },
    { name: " قیمت", style: "" },
    { name: " وضعیت", style: "md:mr-7 mr-9" },
  ];
  return (
    <div className=" border-b border-teal-400 border-dashed w-min md:w-full pb-3 grid grid-cols-7 md:grid-cols-6 gap-48 md:gap-10 ">
      {titles.map((index) => (
        <div
          className={`w-32 flex md:w-24 text-zinc-500 ${index.style}`}
          key={index.name}
        >
          <span>{index.name}</span>
          <span className="text-left flex item-center justify-center mt-1 mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
      ))}
    </div>
  );
}
