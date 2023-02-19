import React from "react";

export default function ShopData({
  shopname,
  shopdescription,
  onchangeShopname,
  onchangeShopdescription,
}) {
  return (
    <div className="flex flex-col ml-6">
      <div className="flex flex-row">
        <label className="text-sm w-48 mt-3 "> نام فروشگاه </label>
        <input
          type="text"
          placeholder={shopname}
          required
          onChange={onchangeShopname}
          id="text"
          className="focus:outline-none mb-4 w-full shadow-sm border border-teal-300 text-zinc-600 text-sm rounded-lg focus:border focus:border-teal-300  p-2.5"
        />
      </div>
      <div className="flex flex-row">
        <label className="text-sm w-48 mt-3 "> درباره فروشگاه </label>
        <textarea
          type="text"
          id="text"
          rows="6"
          onChange={onchangeShopdescription}
          className="focus:outline-none mb-4 w-full shadow-sm border border-teal-300 text-zinc-600 text-sm rounded-lg focus:border focus:border-teal-300  p-2.5"
          placeholder={shopdescription}
          required
        />
      </div>
    </div>
  );
}
