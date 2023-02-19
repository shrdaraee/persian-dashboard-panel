import React, { useState } from "react";
import Title from "../../../../Components/Component/Title";
import UploadImage from "../../../../Components/Component/UploadImage";
import AddData from "./AddData";
import SendData from "../../../../Components/Component/SendData";
import { useStateContext } from "../../../../Helper/ContextProvider";
import { post } from "../../../../Services/HttpRequest";

export default function AddNewProduct() {
  const { productitem, setReload } = useStateContext();
  const [productname, setproductname] = useState(null);
  const [productprice, setproductprice] = useState(null);
  const [productdescription, setproductdescription] = useState(null);
  const [productimg, setproductimg] = useState(null);

  const nameOnchaneg = (e) => {
    setproductname(e.target.value);
  };
  const priceOnchaneg = (e) => {
    setproductprice(e.target.value);
  };
  const descriptionOnchaneg = (e) => {
    setproductdescription(e.target.value);
  };
  const imgOnchaneg = (e) => {
    setproductimg(e.target.files[0].name);
  };

  let time = new Date();

  const submit = (e) => {
    e.preventDefault();

    post("ProductsList", {
      id: productitem.length + 1,
      ProductIMG: `assets/images/${productimg}`,
      ProductName: productname,
      count: 0,
      date: time.toLocaleDateString(),
      price: parseInt(productprice),
      description: productdescription,
    })
      .then((res) => setReload(true))
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex justify-center items-center mt-6 mx-6 ">
      <div className="w-full h-fit bg-white  rounded-lg shadow-lg shadow-teal-100 p-4">
        <Title title="افزودن محصول جدید" />
        <form>
          <div className="sm:flex ">
            <UploadImage
              name="تصویر محصول خود را وارد کنید"
              onchaneg={imgOnchaneg}
            />

            <AddData
              nameOnchaneg={nameOnchaneg}
              priceOnchaneg={priceOnchaneg}
              descriptionOnchaneg={descriptionOnchaneg}
            />
          </div>

          <SendData value="اضافه کردن محصول جدید" handler={submit} />
        </form>
      </div>
    </div>
  );
}
