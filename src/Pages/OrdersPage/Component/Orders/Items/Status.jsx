import React from "react";
import { useStateContext } from "../../../../../Helper/ContextProvider";
import { put } from "../../../../../Services/HttpRequest";

export default function Status({ state, id, item }) {
  const { setReload } = useStateContext();

  function onChangeStatus() {
    setReload(true);
    put(`OrdersList/${id}`, {
      ...item,
      state: !state,
    });
  }
  return (
    <button
      onClick={onChangeStatus}
      className={
        state
          ? "bg-teal-400 text-teal-50 rounded-lg py-2 px-2 mr-6 w-28"
          : "bg-yellow-400 text-yellow-50 rounded-lg py-2 px-2 mr-6 w-28"
      }
    >
      {state ? " تاییدشده" : "درانتظارتایید"}
    </button>
  );
}
