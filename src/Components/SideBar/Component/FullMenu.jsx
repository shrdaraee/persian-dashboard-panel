import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuList } from "../../../Data/MenuList";

export default function FullMenu({ showModalLogoutPage }) {
  const [route, setRoute] = useState("");
  const pathname = window.location.pathname;
  return (
    <>
      <nav className="pt-2 flex justify-center">
        <ul>
          {MenuList.map((item, index) => (
            <Link to={route} key={index}>
              <li
                onClick={(event) => {
                  if (event.detail === 1) {
                    setRoute(item.to);
                  }
                }}
                className={
                  item.to === pathname
                    ? "text-white mt-2 pr-2 flex items-center p-2 mx-2 w-64  transition-color duration-200 justify-start  bg-teal-400 rounded-md"
                    : "text-zinc-600 mt-2 pr-2 flex items-center p-2 mx-2 w-64  justify-start  hover:text-teal-600 "
                }
              >
                <span className="pr-4 text-left">{item.icon}</span>

                <span className=" mx-4 text-base">{item.text}</span>
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      <div
        onClick={showModalLogoutPage}
        className=" text-white cursor-pointer mt-12 pr-2 flex items-center p-2 mx-2 w-64  justify-start  transition-color duration-200  bg-rose-500 rounded-md"
      >
        <span className="pr-2 text-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
        </span>
        <span className="mx-4 text-base">خروج از حساب</span>
      </div>
    </>
  );
}
