import React from "react";
import { Link } from "react-router-dom";

export default function InfoBox({
  name,
  color,
  iconBg,
  borderColor,
  boxBg,
  icon,
  path,
  count,
}) {
  return (
    <Link to={path}>
      <div
        className={`cursor-pointer ${boxBg} ${color} border ${borderColor}  rounded-2xl mx-3 my-1`}
      >
        <div className="flex flex-col items-center mx-7 my-4 sm:mx-20 lg:mx-10 ">
          <div
            className={`${iconBg} rounded-full w-11 h-11 flex justify-center items-center`}
          >
            {icon}
          </div>
          <div className="flex justify-center mt-2 text-md font-semibold">
            {count}+
          </div>
          <div className="flex justify-center text-center">{name}</div>
        </div>
      </div>
    </Link>
  );
}
