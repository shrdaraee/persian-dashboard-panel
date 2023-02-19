import React, { useEffect } from "react";
import { useStateContext } from "../../Helper/ContextProvider";
import { get } from "../../Services/HttpRequest";
import MobileBar from "./Component/MobileBar/MobileBar";
import DesktopBar from "./Component/DesktopBar/DesktopBar";
import DesktopMenuIcon from "./Component/DesktopBar/DesktopMenuIcon";
export default function SideBar({ showModalLogoutPage }) {
  const {
    isAboveMediumScreens,
    Showmenu,
    reload,
    setReload,
    siteinfo,
    setsiteinfo,
  } = useStateContext();

  useEffect(() => {
    let cleanup = false;
    if (!cleanup) {
      get("Siteinfo").then((siteinfo) => setsiteinfo(siteinfo));
    }

    return () => {
      cleanup = true;
      setReload(false);
    };
  }, [reload]);

  return isAboveMediumScreens ? (
    Showmenu ? (
      <DesktopMenuIcon
        siteinfo={siteinfo}
        showModalLogoutPage={showModalLogoutPage}
      />
    ) : (
      <DesktopBar
        siteinfo={siteinfo}
        showModalLogoutPage={showModalLogoutPage}
      />
    )
  ) : Showmenu ? (
    <MobileBar siteinfo={siteinfo} showModalLogoutPage={showModalLogoutPage} />
  ) : null;
}
