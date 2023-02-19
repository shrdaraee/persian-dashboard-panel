import React, { Children } from "react";

export default function ChartBox({ title, Children, style }) {
  return (
    <div
      className={`bg-white  m-3 shadow-md shadow-teal-50 rounded-2xl p-2  ${style}`}
    >
      <div className="flex justify-between ">
        <div className="flex justify-end">
          <h2 className="  text-zinc-600 text-sm lg:text-md pt-3 ">{title}</h2>
        </div>
        {/*
        <div className="flex justify-start items-start rounded-lg">
          <div className=" text-rose-500 flex items-start border border-rose-200 rounded-lg p-2">
            <span className="text-left">
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
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
            </span>
            <span className=" mx-1 text-xs">یک هفته اخیر</span>
          </div>
        </div>
        */}
      </div>
      <div className="m-2 flex justify-center items-center pr-4">
        {Children}
      </div>
    </div>
  );
}
