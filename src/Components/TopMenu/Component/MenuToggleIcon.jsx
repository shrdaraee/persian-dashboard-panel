import React from "react";
import { useStateContext } from "../../../Helper/ContextProvider";
export default function MenuToggleIcon() {
  const { Showmenu, setShowmenu } = useStateContext();

  return (
    <div
      onClick={() => setShowmenu(!Showmenu)}
      className="text-teal-500 cursor-pointer  w-8 h-8 md:w-10 md:h-10 rounded-full bg-teal-50 flex justify-center items-center"
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
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  );
}
