import React from "react";
import FullMenu from "../FullMenu";
export default function DesktopBar({ siteinfo, showModalLogoutPage }) {
  return siteinfo.map((index) => (
    <div className="h-screen sticky inset-0 shadow-lg w-72 pt-2 bg-white border-l border-teal-300">
      <div className="flex items-center justify-center mt-12">
        <img
          src={index.logo}
          alt={index.sitename}
          key={index.id}
          className="w-16 h-16 rounded-full shadow-lg"
        />
      </div>
      <div className="flex items-center justify-center py-2">
        {index.sitename}
      </div>
      <hr className="mx-6 my-2 h-0.5 bg-teal-400" />
      <FullMenu showModalLogoutPage={showModalLogoutPage} />
    </div>
  ));
}
