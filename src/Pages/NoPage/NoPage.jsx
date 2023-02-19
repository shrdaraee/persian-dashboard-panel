import React from "react";

export default function NoPage() {
  return (
    <div className="flex flex-col pt-24  items-center justify-center px-8 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white   rounded-lg shadow-lg shadow-teal-100  md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 flex justify-center">
          <h1 className="text-lg font-bold">صفحه مورد نظر موجود نمی‌باشد !</h1>
        </div>
      </div>
    </div>
  );
}
