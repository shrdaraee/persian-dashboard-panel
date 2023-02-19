import React, { useState, useLayoutEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useStateContext } from "../../Helper/ContextProvider";

export default function LoginPage() {
  const { Validation, setValidation } = useStateContext();
  const adminEmail = "sahar@gmail.com";
  const adminPass = "11";

  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [errorMessages, setErrorMessages] = useState(false);
  const renderErrorMessage = () => setErrorMessages(true);

  {
    /* بررسی اعتبار سنجی یوزر و پسورد پس از کلیک */
  }
  const handleSubmit = (event) => {
    setValidation(false);
    setErrorMessages(false);
    //Prevent page reload
    event.preventDefault();
    if (adminEmail === email) {
      if (adminPass === pass) {
        setValidation(true);
      } else {
        renderErrorMessage();
      }
    } else {
      renderErrorMessage();
    }
  };
  {
    /* ریدایرکت کاربر به صفحه مورد نظر یا صفحه اصلی پنل  */
  }
  const Navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  useLayoutEffect(() => {
    if (Validation) {
      Navigate(from);
    }
  }, [from, Navigate, Validation]);

  return (
    <section className="bg-teal-50 ">
      <div className="flex flex-col pt-24  items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow-lg shadow-teal-100  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            {errorMessages ? (
              <div className="text-white  bg-rose-500 py-3 px-4 rounded-lg flex justify-center">
                آدرس ایمیل و یا رمز عبور شما اشتباه است
              </div>
            ) : null}
            <p className="text-md">ورود به پنل مدیریت فروشگاه</p>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  آدرس ایمیل
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-teal-50 border border-teal-300 text-zinc-700 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5"
                  placeholder="youremail@gmail.com"
                  required
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  رمز عبور
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-teal-50 border border-teal-300 text-zinc-700 sm:text-sm rounded-lg  block w-full p-2.5 focus:outline-none "
                  required
                  value={pass}
                  onChange={(e) => {
                    setpass(e.target.value);
                  }}
                />
              </div>
              {/*
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-teal-300 rounded bg-teal-50 focus:ring-3 focus:ring-primary-300 "
                      required=""
                    />
                  </div>
                  <div className="mr-3 text-sm">
                    <label htmlFor="remember" className="text-zinc-500 ">
                      مرا به خاطر بسپار
                    </label>
                  </div>
                </div>
              </div>
               */}
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full mb-5 text-white bg-teal-400 hover:bg-primary-700  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                ورود به پنل
              </button>
              <div></div>
              {/*
              <div>
                <a
                  href="#"
                  className="text-sm font-medium text-rose-500 hover:underline "
                >
                  رمز عبور خود را فراموش کرده اید؟
                </a>
              </div> 
              */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
