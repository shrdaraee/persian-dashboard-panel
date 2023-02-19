import React from "react";

export default function Title({ title }) {
  return (
    <div>
      <h2 className="flex justify-start font-semibold my-2 ">{title}</h2>
    </div>
  );
}
