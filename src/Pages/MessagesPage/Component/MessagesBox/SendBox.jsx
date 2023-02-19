import React, { useState } from "react";
import { useStateContext } from "../../../../Helper/ContextProvider";
import { put } from "../../../../Services/HttpRequest";

export default function SendBox({ item }) {
  const { setReload } = useStateContext();
  const [newMessage, setnewMessage] = useState("");
  const chats = item[0].message;
  const data = item[0];
  const ID = item[0].id;
  const PATH = `Usersmessage/${ID}`;

  let currentdate = new Date();
  let time = currentdate.getHours() + ":" + currentdate.getMinutes();

  const sendwithenter = (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      put(PATH, {
        ...data,
        message: [...chats, { type: "send", message: newMessage, date: time }],
      })
        .then(function (response) {
          setnewMessage("");
          setReload(true);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  const sendMessage = (e) => {
    e.preventDefault();

    put(PATH, {
      ...data,
      message: [...chats, { type: "send", message: newMessage, date: time }],
    })
      .then(function (response) {
        setnewMessage("");
        setReload(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="sticky bottom-0  border-t border-teal-50 bg-white mt-4 h-16 rounded-lg flex items-center ">
      <div className="flex flex-row-reverse justify-between items-center w-full">
        <input
          type="text"
          className="mx-4 w-3/4 rounded-full bg-zinc-100 focus:outline-none px-4 py-1 text-sm"
          placeholder="تایپ کنید..."
          value={newMessage}
          onChange={(e) => setnewMessage(e.target.value)}
          onKeyUp={sendwithenter}
        />
        <button
          onClick={sendMessage}
          className="px-5 py-2  flex justify-center items-center
         bg-teal-400 text-white rounded-full cursor-pointer mr-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
          <span className="px-1"> ارسال</span>
        </button>
      </div>
    </div>
  );
}
