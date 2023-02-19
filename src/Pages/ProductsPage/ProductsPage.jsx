import React from "react";
import Layout from "../../Components/Layout/Layout";
import AddNewProduct from "./Component/AddNewProduct";
import Products from "./Component/Products";
export default function ProductsPage() {
  return (
    <Layout>
      <AddNewProduct />
      <Products />
    </Layout>
  );
}
