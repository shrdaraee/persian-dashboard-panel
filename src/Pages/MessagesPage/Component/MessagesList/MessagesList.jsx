import React, { useState } from "react";
import Pagination from "../../../../Components/Pagination";

export default function MessagesList({ Message, activemessage, messageid }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(4);
  {
    /* Records to be displayed on each page */
  }
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  {
    /*   Records to be displayed on the current page */
  }
  const currentRecords = Message.slice(indexOfFirstRecord, indexOfLastRecord);

  {
    /*Calculate the number of pages. */
  }

  const nPages = Math.ceil(Message.length / recordsPerPage);

  return (
    <>
      <div className="sm:grid sm:grid-cols-2 sm:gap-2 lg:grid-cols-1 mt-3 lg:mt-0">
        {currentRecords.map((item) => (
          <div
            onClick={() => {
              activemessage(item.id);
              console.log(item.id);
            }}
            key={item.id}
            className={
              item.id == messageid
                ? "lg:mb-2 flex flex-col bg-white shadow-lg rounded-xl mb-2 cursor-pointer px-2 pt-4 "
                : "lg:mb-2 flex flex-col shadow-lg border border-teal-400 rounded-xl mb-2 cursor-pointer px-2 pt-4 "
            }
          >
            <div className="flex flex-row">
              <div className="mt-1 ml-4 ">
                <img
                  src={item.profileIMG}
                  alt={item.name}
                  className="w-12 h-12 rounded-full shadow-lg"
                />
              </div>
              <div className="mt-1">
                <span className="text-sm text-zinc-600 ">{item.name} </span>
                <div>
                  <span
                    className={
                      item.online
                        ? "text-xs text-teal-400 "
                        : "text-xs text-rose-400 "
                    }
                  >
                    {item.online ? "آنلاین" : "آفلاین"}
                  </span>
                </div>
                <p className="text-sm text-gray-700 my-1 opacity-0">
                  برای مشاهده پیام کلیک کنید
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        nPages={nPages}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
