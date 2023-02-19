import React from "react";
import { Link } from "react-router-dom";

export default function Icons({ name, path }) {
  return (
    <Link to={path}>
      <div className="cursor-pointer">
        <img
          src={`assets/images/${name}.png`}
          className="w-8 h-8  rounded-full mx-[2px] "
          alt="icons"
        />
      </div>
    </Link>
  );
}
