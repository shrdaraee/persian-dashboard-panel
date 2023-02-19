import React, { useEffect } from "react";
import { useStateContext } from "../../Helper/ContextProvider";
import { get } from "../../Services/HttpRequest";

export default function MainPage({ children }) {
  const { setOrders, setproductitem, setUsers, reload, setReload, setMessage } =
    useStateContext();
  useEffect(() => {
    let cleanup = false;
    if (!cleanup) {
      get("OrdersList").then((order) => setOrders(order));
    }

    return () => {
      cleanup = true;
      setReload(false);
    };
  }, [reload]);

  useEffect(() => {
    let cleanup = false;
    if (!cleanup) {
      get("ProductsList/").then((productitem) => setproductitem(productitem));
    }
    return () => {
      cleanup = true;
      setReload(false);
    };
  }, [reload]);

  useEffect(() => {
    let cleanup = false;
    if (!cleanup) {
      get("UserList").then((UserList) => setUsers(UserList));
    }

    return () => {
      cleanup = true;
      setReload(false);
    };
  }, [reload]);

  useEffect(() => {
    let cleanup = false;
    if (!cleanup) {
      get("Usersmessage").then((message) => setMessage(message));
    }

    return () => {
      cleanup = true;
      setReload(false);
    };
  }, [reload]);
  return <div>{children}</div>;
}
