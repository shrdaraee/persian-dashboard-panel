import React from "react";
import ChartBox from "../../Components/Charts/ChartBox";
import Layout from "../../Components/Layout/Layout";
import InfoBox from "./Component/InfoBox";
import NotificationBox from "./Component/NotificationBox";
import TopSales from "./Component/TopSales";
import NewOrders from "./Component/NewOrders";
import { BarStatic } from "./../../Components/Charts/StatisticChart";
import { useStateContext } from "../../Helper/ContextProvider";

export default function HomePage() {
  const InfoProductBoxIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
      />
    </svg>
  );
  const InfoOrderBoxIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
      />
    </svg>
  );
  const { orders, productitem } = useStateContext();

  return (
    <Layout>
      <div className="lg:flex">
        <ChartBox
          title="نمودار میله ای فروش محصولات"
          Children={<BarStatic />}
          style="lg:w-2/3"
        />

        <div className=" flex flex-col-reverse lg:flex-col  ">
          <NotificationBox />
          <div className="flex flex-row justify-center lg:items-end ">
            <InfoBox
              name="  محصولات سایت"
              color="text-rose-400"
              iconBg="bg-rose-50"
              borderColor="border-rose-300"
              boxBg="bg-rose-200"
              icon={InfoProductBoxIcon}
              path="/products"
              count={productitem.length}
            />

            <InfoBox
              name="سفارشات سایت "
              color="text-teal-500"
              iconBg="bg-teal-50"
              borderColor="border-teal-300"
              boxBg="bg-teal-200"
              icon={InfoOrderBoxIcon}
              path="/orders"
              count={orders.length}
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="lg:flex lg:justify-between">
          <NewOrders orders={orders} />
          <TopSales products={productitem} />
        </div>
      </div>
    </Layout>
  );
}
