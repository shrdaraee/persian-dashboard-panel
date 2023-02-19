import React from "react";
import MenuToggleIcon from "./Component/MenuToggleIcon";
import UserProfileIcon from "./Component/UserProfileIcon";
import Icons from "./Component/Icons";
import SearchBox from "./Component/SearchBox";

export default function TopMenu() {
  return (
    <div className="bg-white w-full h-16 sm:h-20 shadow-md shadow-teal-50 sticky inset-0 z-10">
      <div className="flex justify-between  item-center">
        <div className="flex  items-center mx-2 my-4 md:my-4 md:mx-3 ">
          <MenuToggleIcon />
          <SearchBox />
        </div>

        <div className="flex justify-center items-center mx-2 my-4 md:my-4 md:mx-3 ">
          <Icons name={"icon-messages"} path={"/messages"} />
          <Icons name={"icon-add-items"} path={"/products"} />
          <Icons name={"icon-notif"} path={"/orders"} />
          <UserProfileIcon />
        </div>
      </div>
    </div>
  );
}
