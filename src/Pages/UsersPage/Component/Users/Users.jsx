import React, { useState } from "react";
import User from "./User";
import Menu from "./Menu";
import DeletAlert from "../Items/DeletAlert";
import Pagination from "../../../../Components/Pagination";

import { useStateContext } from "../../../../Helper/ContextProvider";

export default function Users() {
  const { users, showmodal } = useStateContext();

  const user = [...users].reverse();

  {
    /* pagination (Comments in read.txt) */
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = user.slice(indexOfFirstRecord, indexOfLastRecord);

  const nPages = Math.ceil(user.length / recordsPerPage);

  return (
    <>
      {showmodal ? <DeletAlert /> : null}
      <div className="overflow-x-scroll md:overflow-x-hidden">
        <Pagination
          currentPage={currentPage}
          nPages={nPages}
          setCurrentPage={setCurrentPage}
          style="justify-end pb-5 "
        />
        <Menu />
        {!currentRecords.length ? (
          <div>Loading...</div>
        ) : (
          currentRecords.map((item, index) => (
            <User item={item} index={index} key={item.id} />
          ))
        )}
      </div>
    </>
  );
}
