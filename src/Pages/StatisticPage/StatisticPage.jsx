import React from "react";
import Layout from "../../Components/Layout/Layout";
import ChartBox from "../../Components/Charts/ChartBox";
import ListOfSales from "./Component/ListOfSales";
import {
  LineStatic,
  PieStatic,
  BarStatic,
} from "../../Components/Charts/StatisticChart";
export default function StatisticPage() {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 m-3 ">
        <ChartBox
          title="نمودار میله ای فروش محصولات"
          Children={<BarStatic />}
          style=""
        />
        <ChartBox
          title="نمودار نقطه ای فروش محصولات"
          Children={<LineStatic />}
          style=""
        />
        <div>
          <ChartBox
            title="نمودار دایره ای فروش محصولات"
            Children={<PieStatic />}
            style=""
          />
        </div>
        <ListOfSales />
      </div>
    </Layout>
  );
}
