import { useState, createContext, useContext } from "react";
import useMediaQuery from "./useMediaQuery";

const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [Showmenu, setShowmenu] = useState(false);
  const [admininfo, setadmininfo] = useState([]);
  const [siteinfo, setsiteinfo] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [userID, setuserID] = useState(null);
  const [userName, setuserName] = useState(null);
  const [productitem, setproductitem] = useState([]);
  const [Message, setMessage] = useState([]);
  const [reload, setReload] = useState(false);
  const [showmodal, setShowmodal] = useState(false);
  const [Validation, setValidation] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 481px)");
  const isAboveMediumScreens = useMediaQuery("(min-width: 764px)");

  return (
    <stateContext.Provider
      value={{
        admininfo,
        setadmininfo,
        reload,
        setReload,
        siteinfo,
        setsiteinfo,
        orders,
        setOrders,
        productitem,
        setproductitem,
        users,
        setUsers,
        showmodal,
        setShowmodal,
        userID,
        setuserID,
        setuserName,
        userName,
        Message,
        setMessage,
        Showmenu,
        setShowmenu,
        Validation,
        setValidation,
        isAboveSmallScreens,
        isAboveMediumScreens,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
