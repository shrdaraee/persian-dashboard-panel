import React from "react";
import { useStateContext } from "../../../../Helper/ContextProvider";
import { del } from "../../../../Services/HttpRequest";
export default function DeletAlert() {
  const { setShowmodal, userID, setReload, userName } = useStateContext();

  const deletuser = () => {
    del(`UserList/${userID}`)
      .then((res) => setReload(true))
      .catch((err) => console.log(err));

    setShowmodal(false);
  };
  return (
    <div className="flex flex-col fixed inset-x-0/4 w-full bg-half-transparent items-center justify-center px-8 py-8 mx-auto  lg:py-0">
      <div className="w-full bg-white   rounded-lg shadow-lg shadow-teal-100  md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <p className="pb-8">آیا میخواهید {userName} را حذف کنید؟</p>
          <div className="items-center justify-center flex flex-row ">
            <button
              onClick={deletuser}
              className="mx-4 bg-rose-400 px-6 py-2 m-2  rounded-md text-white"
            >
              بله
            </button>

            <button
              onClick={() => setShowmodal(false)}
              className="mx-4 bg-teal-400 px-4 py-2 m-2  rounded-md text-white"
            >
              خیر
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
