import React, { useState } from "react";
import { useStateContext } from "../../../Helper/ContextProvider";
import { isEven } from "../../../Helper/Functions";
import Pagination from "../../../Components/Pagination";
export default function ListOfSales() {
  const { productitem } = useStateContext();

  {
    /* pagination (Comments in read.txt) */
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(7);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = productitem.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const nPages = Math.ceil(productitem.length / recordsPerPage);

  {
    /* menu titles */
  }

  const titles = [
    { name: "نام محصول", style: "" },
    { name: "تعداد", style: "flex justify-center" },
    {
      name: "فروش کلی",
      style: "flex justify-end",
    },
  ];

  return (
    <div className="m-3">
      <div className="border-b border-teal-400 border-dashed grid grid-cols-3 gap-1 pb-3 py-2 px-1">
        {titles.map((index) => (
          <div
            className={`text-zinc-500 flex items-center ${index.style}`}
            key={index.name}
          >
            <span className={`${index.textposition}`}>{index.name}</span>
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
      {currentRecords.map((item) => (
        <div
          key={item.id}
          className={
            isEven(item.id)
              ? "grid grid-cols-3 gap-1 py-3 px-2 my-2"
              : "grid grid-cols-3 gap-1 py-3 px-2 my-2 bg-white shadow-lg shadow-teal-50 rounded-xl"
          }
        >
          <p className=" text-sm text-zinc-600  m-2">{item.ProductName}</p>

          <p className="text-sm text-teal-600 font-semibold text-center m-2">
            {item.count}
          </p>

          <p className="m-2 text-sm text-teal-600 font-semibold text-left">
            {item.count * item.price} تومان
          </p>
        </div>
      ))}
      <Pagination
        currentPage={currentPage}
        nPages={nPages}
        setCurrentPage={setCurrentPage}
        style="justify-end "
      />
    </div>
  );
}
