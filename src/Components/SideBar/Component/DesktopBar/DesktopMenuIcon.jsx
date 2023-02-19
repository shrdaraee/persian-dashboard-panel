import React from "react";
import IconMenu from "../IconMenu";
export default function DesktopBar({ siteinfo, showModalLogoutPage }) {
  return siteinfo.map((index) => (
    <div className="h-screen sticky inset-0 shadow-lg bg-white px-10 border-l border-teal-300">
      <div className="flex items-center justify-center mt-20 mb-5">
        <img
          src={index.logo}
          alt={index.sitename}
          key={index.id}
          className="w-12 h-12  rounded-full shadow-lg"
        />
      </div>
      <hr className="mx-2 my-2 h-0.5 bg-teal-400" />
      <IconMenu showModalLogoutPage={showModalLogoutPage} />
    </div>
  ));
}
