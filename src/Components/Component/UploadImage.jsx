import React from "react";

export default function UploadImage({ name, onchaneg }) {
  return (
    <div className="flex justify-center items-center my-3 sm:w-64">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col justify-center items-center w-full h-32 sm:h-64 bg-teal-50 rounded-lg border-2 border-teal-200 border-dashed cursor-pointer  hover:border-teal-300"
      >
        <div className="flex flex-col justify-center items-center pt-5 pb-6">
          <svg
            aria-hidden="true"
            className="mb-3 w-10 h-10 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
          <p className="mb-2 text-sm text-zinc-400">
            <span> {name} </span>
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={onchaneg}
        />
      </label>
    </div>
  );
}
