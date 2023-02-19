import React, { useLayoutEffect, useRef } from "react";

export default function Chats({ item }) {
  const chats = item[0].message;
  const messageRef = useRef();
  useLayoutEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
    }
  });
  return (
    <>
      {chats.map((item) => (
        <div
          key={item.id}
          ref={messageRef}
          className={
            item.type == "send"
              ? "flex flex-row justify-start ml-8 my-3"
              : "flex flex-row justify-end mr-8 my-3"
          }
        >
          <div
            className={
              item.type == "send"
                ? "bg-teal-400  rounded-xl px-6 py-3"
                : "bg-teal-50 rounded-xl px-6 py-3 "
            }
          >
            <p
              className={
                item.type == "send"
                  ? "text-white text-sm"
                  : "text-zinc-500 text-sm"
              }
            >
              {item.message}
            </p>
            <p
              className={
                item.type == "send"
                  ? "text-teal-100 text-sm text-left mt-2"
                  : "text-zinc-400 text-sm text-left mt-2"
              }
            >
              {item.date}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
