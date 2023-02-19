import React from "react";
import Chats from "./Chats";
import SendBox from "./SendBox";
import UserName from "./UserName";

export default function MessagesBox({ currentchat }) {
  return currentchat.length ? (
    <div className=" bg-white h-[350px] lg:h-[500px] lg:sticky lg:top-24 lg:w-3/4 shadow-md shadow-teal-50 rounded-xl px-2 mx-3 overflow-y-scroll ">
      <UserName item={currentchat} />

      <Chats item={currentchat} />
      <SendBox item={currentchat} />
    </div>
  ) : (
    <div>Loading...</div>
  );
}
