import React from "react";
import { Link } from "react-router-dom";
import { isEven } from "../../../Helper/Functions";
export default function NewOrders({ orders }) {
  const order = [...orders].reverse();
  const NewOrders = order.filter((item, index) => {
    return index < 6;
  });
  const titles = [
    { name: "نام ", style: "md:pr-0" },
    { name: " سفارش", style: "col-span-2" },
    { name: "قیمت ", style: "pr-0" },
  ];
  return (
    <>
      <div className="lg:w-3/4">
        <div className="flex justify-between mx-3 ">
          <div className="flex justify-end">
            <h2 className="mt-1 text-zinc-600"> آخرین سفارشات ثبت شده </h2>
          </div>
          <div className="flex justify-start items-start rounded-lg">
            <Link to={"/orders"}>
              <div className=" text-teal-600 text-sm flex items-start  rounded-lg p-2">
                مشاهده همه
              </div>
            </Link>
          </div>
        </div>
        {/* orders details Title */}
        <div className=" grid grid-cols-4 gap-2 items-center px-2 pb-4 border-b border-teal-400 border-dashed mx-4 mt-2">
          {titles.map((index) => (
            <div
              className={`text-zinc-500 flex items-center ${index.style}`}
              key={index.name}
            >
              <span className="text-center">{index.name}</span>
              <span className="pr-1 text-left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-3 h-3"
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
        {/* orders */}

        <div>
          {NewOrders.map((item, index) => (
            <div
              key={item.id}
              className={
                isEven(index)
                  ? "grid grid-cols-4 gap-2 items-center mx-4 my-4 p-3 text-sm text-zinc-600 bg-white rounded-lg"
                  : "grid grid-cols-4 gap-2 items-center mx-4 my-4 p-3 text-sm text-zinc-600 "
              }
            >
              <p className=" ">{item.name}</p>

              <ul className="col-span-2">
                {item.orders.map((x) => (
                  <li key={x} className="list-disc list-inside">
                    {x}
                  </li>
                ))}
              </ul>

              <div className="flex items-center ">
                <p className="text-sm text-teal-600 font-semibold text-center flex justify-center">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
