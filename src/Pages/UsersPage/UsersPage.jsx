import React from "react";
import Layout from "../../Components/Layout/Layout";
import Users from "./Component/Users";

export default function UsersPage() {
  return (
    <Layout>
      <div className="my-8 mx-3 lg:mx-3">
        <Users />
      </div>
    </Layout>
  );
}
