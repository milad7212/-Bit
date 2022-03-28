import React from "react";

function MenuButton({ title = "title", color, children }) {
  return (
    <>
      <button
        style={{ color: color ? "#35425E" : "#84755F" }}
        className="py-[7px] px-[16px] text-gray-500"
      >
        <div className="flex items-center">
          {children}
          <span>{title}</span>
        </div>
      </button>
    </>
  );
}

export default MenuButton;
