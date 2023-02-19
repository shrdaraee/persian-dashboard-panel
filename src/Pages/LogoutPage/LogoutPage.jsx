import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../../Helper/ContextProvider";
export default function LogoutPage({ closeModalLogoutPage }) {
  const { setValidation } = useStateContext();
  return (
    <div className="flex flex-col pt-24  items-center justify-center px-8 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white   rounded-lg shadow-lg shadow-teal-100  md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <p className="pb-8">آیا میخواهید از حساب کاربری خود خارج شوید؟</p>
          <div className="flex flex-col items-center justify-center sm:flex sm:flex-row ">
            <Link to={"/login"}>
              <button
                onClick={() => {
                  setValidation(false);
                }}
                className="mx-4 bg-rose-400 px-6 py-2 m-2  rounded-md text-white"
              >
                بله خارج میشوم
              </button>
            </Link>
            <button
              onClick={closeModalLogoutPage}
              className="mx-4 bg-teal-400 px-4 py-2 m-2  rounded-md text-white"
            >
              خیر خارج نمیشوم
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
