import React from "react";

export default function InfoData({
  username,
  email,
  password,
  onchangename,
  onchangeemail,
  onchangepassword,
}) {
  return (
    <div className="flex flex-col  sm:mr-6">
      <div className="flex flex-row">
        <label className="text-sm w-48 mt-3 "> نام و نام خانوادگی </label>
        <input
          type="text"
          placeholder={username}
          required
          id="text"
          onChange={onchangename}
          className="focus:outline-none mb-4 w-full shadow-sm border border-teal-300 text-zinc-600 text-sm rounded-lg focus:border focus:border-teal-300  p-2.5"
        />
      </div>
      <div className="flex flex-row">
        <label className="text-sm w-48 mt-3 ">آدرس ایمیل </label>
        <input
          type="email"
          placeholder={email}
          onChange={onchangeemail}
          required
          id="email"
          className="focus:outline-none mb-4 w-full shadow-sm border border-teal-300 text-zinc-600 text-sm rounded-lg focus:border focus:border-teal-300  p-2.5"
        />
      </div>
      <div className="flex flex-row">
        <label className="text-sm w-48 mt-3 "> رمز عبور </label>
        <input
          type="password"
          id="password"
          className="focus:outline-none mb-4 w-full shadow-sm border border-teal-300 text-zinc-600 text-sm rounded-lg focus:border focus:border-teal-300  p-2.5"
          placeholder={password}
          onChange={onchangepassword}
          required
        />
      </div>
    </div>
  );
}
