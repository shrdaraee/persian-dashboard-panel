import React from "react";
import FullMenu from "../FullMenu";
import { useStateContext } from "../../../../Helper/ContextProvider";
export default function MobileBar({ siteinfo, showModalLogoutPage }) {
  const { Showmenu, setShowmenu } = useStateContext();
  return siteinfo.map((index) => (
    <>
      <div className="fixed right-0 bottom-0 h-full bg-white w-[300px] z-20">
        <div className="flex justify-start p-5 text-rose-400">
          <button onClick={() => setShowmenu(!Showmenu)}>
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-center ">
          <img
            src={index.logo}
            alt={index.sitename}
            key={index.id}
            className="w-16 h-16 rounded-full shadow-lg"
          />
        </div>
        <div className="flex items-center justify-center pt-3">
          {index.sitename}
        </div>
        <hr className="mx-6 my-2 h-0.5 bg-teal-400" />
        <FullMenu showModalLogoutPage={showModalLogoutPage} />
      </div>
    </>
  ));
}
