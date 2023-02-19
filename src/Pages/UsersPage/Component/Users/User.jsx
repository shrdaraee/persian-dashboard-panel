import React from "react";
import { isEven } from "../../../../Helper/Functions";
import Roles from "../Items/Roles";
import Status from "../Items/Status";
import Delete from "../Items/Delete";

export default function User({ item, index }) {
  return (
    <div
      className={
        isEven(index)
          ? "py-3 grid grid-cols-8 mt-2 md:grid-cols-7 gap-48 md:gap-10 bg-white rounded-lg px-3 w-min md:w-full"
          : "py-3 grid grid-cols-8 mt-2  md:grid-cols-7 gap-48 md:gap-10 px-3 w-min md:w-full"
      }
    >
      <div className="text-zinc-500  flex items-center ">
        <div className="flex flex-row items-center">
          <img
            src={item.profileIMG}
            alt={item.name}
            className="bg-rose-50 rounded-full w-11 h-11 flex justify-center items-center"
          />
          <p className="mr-2 text-sm text-zinc-600">{item.name}</p>
        </div>
      </div>
      <div className="text-zinc-500 text-sm flex items-center col-span-2 ">
        <p>{item.email}</p>
      </div>

      <p className=" text-sm text-zinc-800 font-semibold text-center flex items-center">
        {item.date}
      </p>

      <Roles role={item.role} />
      <Status verify={item.verification} id={item.id} item={item} />
      <Delete id={item.id} name={item.name} />
    </div>
  );
}
