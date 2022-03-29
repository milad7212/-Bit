import Image from "next/image";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import MenuButton from "../ui/MenuButton/MenuButton";
import Button from "../ui/‌Button/Button";

function MenuHeader() {
  return (
    <div className="border-b shadow-md pl-[12px] p-2 fixed left-0 right-0 bg-white z-10  ">
      <div className="flex items-center md:hidden ">
        <div className="p-[12px] cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
        <h1 className="text-base font-normal">قیمت لحظه ای</h1>
      </div>

      <div className="justify-between hidden md:flex">
        <div className="flex">
          <MenuButton title="منو" color>
            <HiMenuAlt1 size={20} />
          </MenuButton>

          <MenuButton title="خانه" />
          <MenuButton title="قیمت لحظه ای" />
          <MenuButton title="کارمزدها" />
          <MenuButton title="پورتفوی" />
        </div>
        <div className="flex items-center">
          <Button title="ورود / ثبت نام" />
          <hr className="h-[24px] w-[1px] mx-[8px] bg-slate-500" />
          <Image
            src="/header-logo.svg"
            layout="fixed"
            width={119}
            height={48}
            alt="header-logo"
          />
        </div>
      </div>
    </div>
  );
}

export default MenuHeader;
