import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuList } from "../../../Data/MenuList";

export default function IconMenu({ showModalLogoutPage }) {
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
                    ? " text-white cursor-pointer flex items-center  h-12 w-12  justify-center  transition-color duration-200  bg-teal-400 rounded-full"
                    : "text-zinc-600 cursor-pointer flex items-center  h-12 w-12  justify-center hover:text-teal-600 "
                }
              >
                <span className="">{item.icon}</span>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <div>
        <div
          onClick={showModalLogoutPage}
          className=" cursor-pointer flex items-center h-12 w-12  hover:h-12 hover:w-12 hover:text-white hover:bg-rose-400 justify-center  transition-color duration-200  text-rose-500 rounded-full"
        >
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
}
