import React, { useState } from "react";
import Title from "../../../../Components/Component/Title";
import ProductBox from "./ProductBox";
import { useStateContext } from "../../../../Helper/ContextProvider";
import Pagination from "../../../../Components/Pagination";

export default function Products() {
  const { productitem } = useStateContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(8);
  {
    /* Records to be displayed on each page */
  }
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  {
    /*   Records to be displayed on the current page */
  }
  const currentRecords = productitem.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  {
    /*Calculate the number of pages. */
  }

  const nPages = Math.ceil(productitem.length / recordsPerPage);

  const productitemSort = currentRecords.sort((a, b) => b.id - a.id);

  return (
    <div className="flex flex-col items-start mt-6 mx-6 ">
      <Title title="محصولات موجود در سایت" />

      <div className=" grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-3 mt-6 ">
        {productitemSort.map((item) => (
          <ProductBox item={item} key={item.id} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        nPages={nPages}
        setCurrentPage={setCurrentPage}
        style="justify-center"
      />
    </div>
  );
}
