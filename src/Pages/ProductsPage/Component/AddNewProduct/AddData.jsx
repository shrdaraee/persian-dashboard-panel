import React from "react";

export default function AddData({
  nameOnchaneg,
  priceOnchaneg,
  descriptionOnchaneg,
}) {
  return (
    <div className="flex flex-col justify-end items-center sm:w-3/4 sm:mr-6">
      <input
        type="text"
        placeholder="اسم محصول"
        required
        id="text"
        onChange={nameOnchaneg}
        className="focus:outline-none mb-4 w-full shadow-sm bg-teal-50 border border-teal-300 text-zinc-600 text-sm rounded-lg focus:border focus:border-teal-300  p-2.5"
      />
      <input
        type="number"
        placeholder="قیمت محصول"
        required
        id="number"
        onChange={priceOnchaneg}
        className="focus:outline-none mb-4 w-full shadow-sm bg-teal-50 border border-teal-300 text-zinc-600 text-sm rounded-lg focus:border focus:border-teal-300  p-2.5"
      />
      <textarea
        type="number"
        id="number"
        onChange={descriptionOnchaneg}
        rows="7"
        className="focus:outline-none mb-4 w-full shadow-sm bg-teal-50 border border-teal-300 text-zinc-600 text-sm rounded-lg focus:border focus:border-teal-300  p-2.5"
        placeholder="توضیحات محصول"
        required
      />
    </div>
  );
}
