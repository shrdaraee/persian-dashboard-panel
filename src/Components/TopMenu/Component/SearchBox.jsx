import React from "react";
import { useStateContext } from "../../../Helper/ContextProvider";

export default function SearchBox() {
  const { isAboveMediumScreens } = useStateContext();
  return isAboveMediumScreens ? (
    <div className="mr-3">
      <form className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3">
            <a href="#" className="">
              <img src="assets/images/icon-search.png" alt="search" />
            </a>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-zinc-50 text-gray-900 text-sm rounded-2xl focus:outline-none block w-64 py-1 px-4 "
            placeholder="جستجو کنید ..."
            required
          />
        </div>
      </form>
    </div>
  ) : (
    <div className="text-teal-500 cursor-pointer mr-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>
  );
}
