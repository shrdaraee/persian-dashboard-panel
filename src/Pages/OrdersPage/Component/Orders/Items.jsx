import React from "react";
import Status from "./Items/Status";
import Order from "./Items/Order";
import { isEven } from "../../../../Helper/Functions";

export default function Items({ item, index }) {
  return (
    <div
      className={
        isEven(index)
          ? " py-3 grid grid-cols-7 md:grid-cols-6 gap-48 md:gap-10 px-3 w-min md:w-full bg-white rounded-lg mt-2 "
          : " py-3 grid grid-cols-7 md:grid-cols-6 gap-48 md:gap-10 px-3 w-min md:w-full mt-2"
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
      <div className="col-span-2">
        <Order orders={item.orders} />
      </div>
      <p className=" text-sm text-zinc-800 font-semibold text-center flex items-center">
        {item.date}
      </p>
      <p className="lg:mr-3 text-sm text-teal-600 font-semibold text-center flex items-center">
        {item.price}
      </p>
      <div className="text-zinc-500 flex items-center">
        <Status state={item.state} id={item.id} item={item} />
      </div>
    </div>
  );
}
