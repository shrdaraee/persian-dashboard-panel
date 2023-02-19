import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../../../Helper/ContextProvider";
import useMediaQuery from "../../../Helper/useMediaQuery";
import { get } from "../../../Services/HttpRequest";

export default function UserProfileIcon() {
  const costumsize = useMediaQuery("(min-width: 860px)");
  const { admininfo, setadmininfo, reload, setReload } = useStateContext();

  useEffect(() => {
    let cleanup = false;
    if (!cleanup) {
      get("Admininfo").then((admindata) => setadmininfo(admindata));
    }

    return () => {
      cleanup = true;
      setReload(false);
    };
  }, [reload]);

  return admininfo.map((index, i) => (
    <>
      <div className="" key={index.id}>
        <img
          src={index.profile}
          alt={index.username}
          key={i}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg mx-[2px]"
        />
      </div>
      {costumsize && (
        <div className="mx-1">
          <span className="text-sm text-zinc-600">{index.username}</span>
          <br />
          <Link to={"/profile"}>
            <p className="text-xs text-rose-500 ">ویرایش</p>
          </Link>
        </div>
      )}
    </>
  ));
}
