import React from "react";

export default function NotificationBox() {
  return (
    <div className="overflow-hidden bg-gradient-to-r from-teal-100 to-rose-50 shadow-md shadow-teal-50  m-3 rounded-2xl p-4 flex flex-col justify-start items-start ">
      <div className="xl:my-4">
        <div className=" text-rose-500 flex items-start p-1 ">
          <span className="text-left">
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
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
              />
            </svg>
          </span>
          <span className=" mx-1 text-md">آخرین اطلاعات</span>
        </div>

        <div className=" text-zinc-600">
          <ul>
            <li className="ml-5 ">
              <div className="mr-1 flex flex-row items-center py-2">
                <img
                  src="assets/images/profile.png"
                  alt="message-profile2"
                  className="bg-rose-50 rounded-full w-8 h-8 flex justify-center items-center"
                />
                <p className="mr-2 text-xs text-zinc-600">
                  لورم ایپسوم متن ساخت متن ساخت متن ساخت چاپ واست{" "}
                </p>
              </div>
            </li>

            <li className="ml-5 ">
              <div className="mr-1 flex flex-row items-center py-2">
                <img
                  src="assets/images/message-profile2.png"
                  alt="message-profile3"
                  className="bg-rose-50 rounded-full w-8 h-8 flex justify-center items-center"
                />
                <p className="mr-2 text-xs text-zinc-600">
                  لورم ایپسوم متن ساخت متن ساخت متن ساخت چاپ واست{" "}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
