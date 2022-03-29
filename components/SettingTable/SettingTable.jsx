import React from "react";
import InputSearch from "../ui/InputSearch/InputSearch";
import { AiOutlineStar } from "react-icons/ai";

function SettingTable() {
  return (
    <div className="mx-4 mb-4 md:flex">
      <InputSearch />
      <div className="flex md:grow">
        <button className="ml-2 border rounded-md md:basis-[16.66%] md:max-w-[16.66%]">
          <div className="flex items-center p-3">
            <AiOutlineStar size={18} color="#999DA4" />
            <span className="mr-2 text-sm font-bold ">نشان شده ها</span>
          </div>
        </button>
        <button className="ml-2 border rounded-md sm:hidden md:basis-[16.66%] md:max-w-[16.66%]">
          <div className="flex items-center p-3">
            <span className="mr-2 text-sm font-bold">قیمت براساس تومان</span>
          </div>
        </button>

        <select
          className="hidden p-2 ml-2 text-gray-500 bg-white border rounded-md outline-none sm:inline-block md:ml-5"
          name="price"
          id="price"
        >
          <option className="text-gray-900" value="noSelect">
            ترتیب براساس
          </option>
          <option className="text-gray-900" value="minPrice">
            کمترین قیمت
          </option>
          <option className="text-gray-900" value="maxPrice">
            بیشترین قیمت
          </option>
        </select>
        <div className="hidden p-1 ml-2 border rounded-md grow sm:flex ">
          <button className="ml-2 bg-blue-100 rounded-md grow">
            <div className="flex items-center justify-center p-3">
              <span className="mr-2 text-sm font-bold text-blue-500">
                تومان
              </span>
            </div>
          </button>
          <button className="ml-2 rounded-md grow">
            <div className="flex items-center justify-center p-3">
              <span className="mr-2 text-sm font-bold">تتر</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingTable;
