import React from "react";
import Layout from "../../Components/Layout/Layout";
import Orders from "./Component/Orders";

export default function OrdersPage() {
  return (
    <Layout>
      <div className="my-8 mx-3 lg:mx-10">
        <Orders />
      </div>
    </Layout>
  );
}
