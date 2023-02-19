import React from "react";

export default function ProductBox({ item }) {
  return (
    <>
      <div className="bg-white rounded-2xl hover:shadow-2xl hover:shadow-teal-100 mx-2 my-2">
        {/*image */}
        <img
          src={item.ProductIMG}
          alt={item.ProductName}
          className="rounded-lg w-full h-48 "
        />
        {/*name */}
        <h2 className="m-3 text-md font-semibold text-zinc-700">
          {item.ProductName}
        </h2>
        {/*description */}
        <p className="m-3 text-sm text-zinc-400 h-20 overflow-hidden ">
          {item.description}
        </p>
        {/*price */}
        <span className="flex items-center justify-end m-3 text-rose-500">
          {item.price + " تومان "}
        </span>
        {/*editebutton */}
        <div className="w-full h-8 bg-teal-400 text-white flex items-center justify-center rounded-b-lg mt-4">
          <a href="#"> ویرایش محصول</a>
        </div>
      </div>
    </>
  );
}
