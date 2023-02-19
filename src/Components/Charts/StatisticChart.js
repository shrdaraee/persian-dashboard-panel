import { useStateContext } from "../../Helper/ContextProvider";

import { Pie, Bar, Line } from "react-chartjs-2";

import { Chart as ChartJS } from "chart.js/auto";

import React from "react";

export function BarStatic() {
  const { productitem } = useStateContext();
  const userData = {
    labels: productitem.map((item) => item.ProductName),
    datasets: [
      {
        label: "فروش محصولات",
        data: productitem.map((item) => item.price * item.count),
        backgroundColor: ["#5eead4", "#fda4af"],
        borderColor: ["#0cb5a2", "#f43f5e"],
        borderWidth: 2,
        borderRadius: 5,
        cruser: "pointer",
      },
    ],
  };
  return <Bar data={userData} />;
}

export function PieStatic() {
  const { productitem } = useStateContext();
  const userData = {
    labels: productitem.map((item) => item.ProductName),
    datasets: [
      {
        label: "فروش",
        data: productitem.map((item) => item.price * item.count),
        backgroundColor: ["#5eead4", "#fda4af"],
        borderColor: ["#0cb5a2", "#f43f5e"],
        borderWidth: 2,
        borderRadius: 5,
        cruser: "pointer",
      },
    ],
  };
  return <Pie data={userData} height={25} />;
}

export function LineStatic() {
  const { productitem } = useStateContext();
  const userData = {
    labels: productitem.map((item) => item.ProductName),
    datasets: [
      {
        label: "درآمد حاصل از فروش به تومان",
        data: productitem.map((item) => item.price * item.count),
        backgroundColor: ["#5eead4", "#fda4af"],
        borderColor: ["#0cb5a2", "#f43f5e"],
        borderWidth: 2,
        borderRadius: 5,
        cruser: "pointer",
      },
    ],
  };
  return <Line data={userData} />;
}
