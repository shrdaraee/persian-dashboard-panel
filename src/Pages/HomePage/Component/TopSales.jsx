import React from "react";

export default function TopSales({ products }) {
  let productSort = [...products].sort((a, b) => b.count - a.count);
  const TopProducts = productSort.filter((item, index) => {
    return index < 4;
  });
  return (
    <>
      <div className="mx-3 bg-white border border-teal-400 rounded-2xl h-fit py-8 px-4 ">
        <div>
          <h2 className="mx-1 text-zinc-600"> محصولات پرفروش یک ماه اخیر</h2>
        </div>
        {TopProducts.map((item, index) => (
          <div key={item.id}>
            <a href="#" className="flex flex-row border-b border-teal-200 py-6">
              <img
                src={item.ProductIMG}
                alt={item.ProductName}
                className="flex items-start w-20 h-20 shadow shadow-rose-100 rounded-md "
              />

              <div className="flex justify-between flex-col w-full">
                <h2 className="mr-2.5 text-md text-zinc-600 font-semibold">
                  {item.ProductName}
                </h2>
                <div className="flex justify-between flex-row  w-full">
                  <div className="flex justify-center items-center text-xs sm:text-md text-rose-500 mr-2.5">
                    {item.price * item.count}
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 sm:w-9 sm:h-9 border border-rose-300 shadow-md rounded-md shadow-rose-50 text-xs text-rose-500 ">
                    {item.count}+
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
