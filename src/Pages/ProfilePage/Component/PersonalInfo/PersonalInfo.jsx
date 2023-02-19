import React, { useState } from "react";
import Title from "../../../../Components/Component/Title";
import UploadImage from "../../../../Components/Component/UploadImage";
import SendData from "../../../../Components/Component/SendData";
import InfoData from "./InfoData";
import { useStateContext } from "../../../../Helper/ContextProvider";
import { put } from "../../../../Services/HttpRequest";
export default function PersonalInfo({ imgprofilename, handleimage }) {
  let username, email, password, imgname;

  const { admininfo, setReload } = useStateContext();

  admininfo.map((index) => {
    username = index.username;
    email = index.email;
    password = index.password;
    imgname = index.profile;
  });

  const [namevalue, setnamevalue] = useState(null);
  const [emailvalue, setemailvalue] = useState(null);
  const [passwordvalue, setpasswordvalue] = useState(null);
  const [imgprofilevalue, setimgprofilevalue] = useState(null);

  function onchangename(event) {
    setnamevalue(event.target.value);
  }
  function onchangeemail(event) {
    setemailvalue(event.target.value);
  }
  function onchangepassword(event) {
    setpasswordvalue(event.target.value);
  }

  {
    /* send image to post for using 
  function handleUpload() {
    let file = setimgprofilevalue;
    let formdata = new FormData();

    formdata.append("file", file);

    axios
      .post("gs://tamrini-1dbdb.appspot.com/images/", {
        formdata,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  */
  }

  let PATH = "assets/images/";

  function editinfo() {
    console.log(imgprofilename);
    put("Admininfo/1", {
      username: namevalue ? namevalue : username,
      email: emailvalue ? emailvalue : email,
      password: passwordvalue ? passwordvalue : password,
      profile: imgprofilename ? PATH + imgprofilename : imgname,
    })
      .then((res) => setReload(true))
      .catch((err) => console.log(err));
  }

  return (
    <div className="flex justify-center items-center mt-6 mx-3 ">
      <div className="w-full h-fit bg-white  rounded-lg shadow-lg shadow-teal-100 p-8">
        <Title title="اطلاعات شخصی" />
        <div className="sm:flex">
          <div>
            <UploadImage
              name="تصویر پروفایل خود را وارد کنید"
              onchaneg={handleimage}
            />
          </div>
          <div className="sm:flex sm:flex-col sm:mt-3 sm:w-full">
            <InfoData
              username={username}
              email={email}
              password={password}
              onchangename={onchangename}
              onchangeemail={onchangeemail}
              onchangepassword={onchangepassword}
            />
            <div className="sm:mr-6 sm:mt-3">
              <SendData value="ویرایش اطلاعات شخصی" handler={editinfo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
