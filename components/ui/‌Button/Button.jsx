import React from "react";

function Button({ title = "title" }) {
  return (
    <>
      <button className="py-[7px] px-[16px] bg-blue-500 rounded-md text-white ">
        <span className="text-base">{title}</span>
      </button>
    </>
  );
}

export default Button;
