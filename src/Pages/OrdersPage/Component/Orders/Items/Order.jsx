import React from "react";

export default function Order({ orders }) {
  return (
    <ul className="mr-2 text-sm text-zinc-600">
      {orders.map((item) => (
        <li className="list-disc list-inside" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}
