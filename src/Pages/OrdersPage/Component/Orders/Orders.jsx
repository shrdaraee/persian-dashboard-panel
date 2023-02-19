import React, { useState } from "react";
import Items from "./Items";
import Menu from "./Menu";
import Pagination from "../../../../Components/Pagination";
import { useStateContext } from "../../../../Helper/ContextProvider";

export default function Orders() {
  const { orders } = useStateContext();
  const order = [...orders].reverse();

  {
    /* pagination (Comments in read.txt) */
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = order.slice(indexOfFirstRecord, indexOfLastRecord);

  const nPages = Math.ceil(order.length / recordsPerPage);

  return (
    <div className="overflow-x-scroll md:overflow-x-hidden ">
      <Pagination
        currentPage={currentPage}
        nPages={nPages}
        setCurrentPage={setCurrentPage}
        style="justify-end pb-5"
      />
      <Menu />
      {!currentRecords.length ? (
        <div>Loading...</div>
      ) : (
        currentRecords.map((item, index) => (
          <Items item={item} key={item.id} index={index} />
        ))
      )}
    </div>
  );
}
