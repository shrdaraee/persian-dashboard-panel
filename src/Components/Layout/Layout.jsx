import React, { useState } from "react";
import MainPage from "../MainPage";
import SideBar from "../SideBar";
import TopMenu from "../TopMenu";
import LogoutPage from "../../Pages/LogoutPage";

export default function Layout({ children }) {
  const [isShow, setShow] = useState(false);

  const showModalLogoutPage = () => {
    setShow(true);
  };
  const closeModalLogoutPage = () => {
    setShow(false);
  };

  return (
    <>
      <div className="flex items-start justify-between bg-teal-50">
        <SideBar showModalLogoutPage={showModalLogoutPage} />
        <div className="w-screen relative ">
          <TopMenu />
          <MainPage>
            {isShow ? (
              <LogoutPage
                isShow={isShow}
                closeModalLogoutPage={closeModalLogoutPage}
              />
            ) : (
              children
            )}
          </MainPage>
        </div>
      </div>
    </>
  );
}
