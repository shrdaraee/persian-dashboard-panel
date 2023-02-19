import React from "react";

export default function Pagination({
  currentPage,
  nPages,
  setCurrentPage,
  style = "justify-center",
}) {
  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
    console.log(currentPage);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
    console.log(currentPage);
  };

  {
    /* const pageNumbers = [...Array(nPages + 1).keys()].slice(1) */
  }
  return (
    <div className={`flex ${style} items-center m-2 my-6 lg:m-2 `}>
      <div
        onClick={prevPage}
        className="w-8 h-8 bg-teal-300  text-white rounded-full flex justify-center items-center cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
      <span className="mx-2 text-teal-400">...</span>
      {/*
       { pageNumbers.map((pageNumber)=>(
            <li key={pageNumber} className={
                `${currentPage == pageNumber ? "active" : ""}
            } >
                <a onClick={()=>setcurrentPage(pageNumber)}>
                {currentPage}
                </a>
            </li>
        ))}
      */}
      <div className="bg-teal-300 text-white rounded-lg  w-8 h-8 flex justify-center items-center ">
        {currentPage}
      </div>
      <span className="mx-2 text-teal-400">...</span>
      <div
        onClick={nextPage}
        className="w-8 h-8  bg-teal-300 text-white rounded-full flex justify-center items-center cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
}
