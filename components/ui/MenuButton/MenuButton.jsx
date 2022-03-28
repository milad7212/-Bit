import React from "react";

function MenuButton({ title = "title" }) {
  return (
    <>
      <button className="py-[7px] px-[16px] text-gray-500">{title}</button>
    </>
  );
}

export default MenuButton;
