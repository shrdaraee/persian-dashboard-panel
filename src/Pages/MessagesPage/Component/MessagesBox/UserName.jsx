import React from "react";

export default function UserName({ item }) {
  return (
    <div className="sticky bg-white top-0">
      <div className="flex flex-row border-b lg:m-3 border-teal-400 mx-4 p-2 ">
        <div className=" ml-4 ">
          <img
            src={item[0].profileIMG}
            alt={item[0].name}
            className="w-12 h-12 rounded-full shadow-lg"
          />
        </div>
        <div className="ml-14 mt-1">
          <span className="text-sm text-zinc-600"> {item[0].name} </span>
          <br />
          <span
            className={
              item[0].online
                ? "text-xs text-teal-400 "
                : "text-xs text-rose-400 "
            }
          >
            {item[0].online ? " آنلاین" : "آفلاین"}
          </span>
        </div>
      </div>
    </div>
  );
}
