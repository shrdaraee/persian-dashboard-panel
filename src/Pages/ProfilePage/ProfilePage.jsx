import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import PersonalInfo from "./Component/PersonalInfo";
import ShopInfo from "./Component/ShopInfo";
export default function ProfilePage() {
  const [imgprofilename, setimgprofilename] = useState(null);

  const handleimage = (e) => {
    setimgprofilename(e.target.files[0].name);
  };
  return (
    <Layout>
      <PersonalInfo imgprofilename={imgprofilename} handleimage={handleimage} />
      <hr className="mx-6 my-12 h-0.5 border-b border-teal-400 border-dashed" />
      <ShopInfo imgprofilename={imgprofilename} handleimage={handleimage} />
    </Layout>
  );
}
