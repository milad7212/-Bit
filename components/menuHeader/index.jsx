import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuButton from "../ui/MenuButton/MenuButton";

function MenuHeader() {
  return (
    <div className="border-b shadow-md">
      <div className="flex items-center md:hidden ">
        <div className="p-[12px] cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
        <h1 className="text-base font-normal">قیمت لحظه ای</h1>
      </div>

      <div className="flex ">
        <div className="flex">
          <MenuButton title="خانه" />
          <MenuButton title="قیمت لحظه ای" />
          <MenuButton title="کارمزدها" />
          <MenuButton title="پورتفوی" />
        </div>
        <div className="flex"></div>
      </div>
    </div>
  );
}

export default MenuHeader;
