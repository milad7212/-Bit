import React from "react";
import InputSearch from "../ui/InputSearch/InputSearch";
import { AiOutlineStar } from "react-icons/ai";
import { useState } from "react";

function SettingTable() {
  const [itemSelected, setItemSelected] = useState(true);
  return (
    <>
      <div className="items-center hidden mb-4 md:flex">
        <h1 className="text-3xl font-bold">قیمت لحظه‌ای</h1>
        <div className="w-[10px] h-[10px] rounded-full bg-yellow-400 mr-5"></div>
        <span className="mr-2 text-gray-500">{`${"۲۹۳"} ارز دیجیتال`}</span>
      </div>
      <div className="mb-4 md:flex">
        <InputSearch />
        <div className="flex md:grow">
          <button className="ml-2 border rounded-md md:basis-[16.66%] md:max-w-[16.66%]">
            <div className="flex items-center p-3">
              <AiOutlineStar size={18} color="#999DA4" />
              <span className="mr-2 text-sm font-bold whitespace-nowrap">
                نشان شده ها
              </span>
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
            <button
              style={{
                backgroundColor: itemSelected
                  ? "rgb(59 ,130 ,246, .2)"
                  : "#fff",
              }}
              className="ml-2 rounded-md grow"
              onClick={() => setItemSelected(true)}
            >
              <div className="flex items-center justify-center p-3">
                <span
                  style={{
                    color: itemSelected ? "rgb(59 130 246)" : "#272727",
                  }}
                  className="mr-2 text-sm font-bold "
                >
                  تومان
                </span>
              </div>
            </button>
            <button
              style={{
                backgroundColor: !itemSelected
                  ? "rgb(59 ,130 ,246, .2)"
                  : "#fff",
              }}
              className="ml-2 rounded-md grow"
              onClick={() => setItemSelected(false)}
            >
              <div className="flex items-center justify-center p-3">
                <span
                  style={{
                    color: !itemSelected ? "rgb(59 130 246)" : "#272727",
                  }}
                  className="mr-2 text-sm font-bold"
                >
                  تتر
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingTable;
