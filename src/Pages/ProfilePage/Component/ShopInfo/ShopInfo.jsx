import React, { useState } from "react";
import Title from "../../../../Components/Component/Title";
import UploadImage from "../../../../Components/Component/UploadImage";
import SendData from "../../../../Components/Component/SendData";
import ShopData from "./ShopData";
import { useStateContext } from "../../../../Helper/ContextProvider";
import { put } from "../../../../Services/HttpRequest";

export default function ShopInfo({ imgprofilename, handleimage }) {
  let shopname, shopdescription, logo;

  const { setReload, siteinfo } = useStateContext();
  const [sitenameNewValue, setSitenameNewValue] = useState(null);
  const [shopdescriptionNewValue, setshopdescriptionNewValue] = useState(null);

  siteinfo.map((index) => {
    shopname = index.sitename;
    shopdescription = index.description;
    logo = index.logo;
  });
  const onchangeShopname = (e) => {
    setSitenameNewValue(e.target.value);
  };
  const onchangeShopdescription = (e) => {
    setshopdescriptionNewValue(e.target.value);
  };

  const LogoPATH = "assets/images/";

  function submit() {
    setReload(true);
    console.log(imgprofilename);
    put("Siteinfo/1", {
      sitename: sitenameNewValue ? sitenameNewValue : shopname,
      description: shopdescriptionNewValue
        ? shopdescriptionNewValue
        : shopdescription,
      logo: imgprofilename ? LogoPATH + imgprofilename : logo,
    });
  }

  return (
    <div className="flex justify-center items-center my-6 mx-3  ">
      <div className="w-full h-fit bg-white  rounded-lg shadow-lg shadow-teal-100 p-8">
        <Title title="اطلاعات فروشگاه" />
        <div className="sm:flex sm:flex-row-reverse">
          <div>
            <UploadImage
              name="لوگوی فروشگاه خود را وارد کنید"
              onchaneg={handleimage}
            />
          </div>
          <div className="sm:flex sm:flex-col sm:mt-1 sm:w-full">
            <ShopData
              shopname={shopname}
              shopdescription={shopdescription}
              onchangeShopname={onchangeShopname}
              onchangeShopdescription={onchangeShopdescription}
            />
            <div className="sm:ml-6 ">
              <SendData value="ویرایش اطلاعات فروشگاه" handler={submit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
