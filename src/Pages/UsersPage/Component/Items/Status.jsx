import React from "react";
import { useStateContext } from "../../../../Helper/ContextProvider";
import { put } from "../../../../Services/HttpRequest";
export default function Status({ verify, id, item }) {
  const { setReload } = useStateContext();

  function onChangeStatus() {
    put(`UserList/${id}`, {
      ...item,
      verification: !verify,
    })
      .then((res) => setReload(true))
      .catch((err) => console.log(err));
  }
  return (
    <div className="text-zinc-500 flex items-center">
      <button
        onClick={onChangeStatus}
        className={
          verify
            ? "bg-teal-400 text-teal-50 rounded-lg px-2 py-2.5  w-28"
            : "bg-rose-400 text-rose-50 rounded-lg px-2 py-2.5 w-28"
        }
      >
        {verify ? "تایید شده" : "تایید نشده"}
      </button>
    </div>
  );
}
