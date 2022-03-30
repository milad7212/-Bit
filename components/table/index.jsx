import Image from "next/image";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import ChartApp from "../ui/Chart/Chart";

import PriceLine from "../ui/PriceLine/PriceLine";
function Table({ data }) {
  return (
    <div style={{ direction: "ltr" }}>
      <div className="hidden p-2 rounded-md bg-gray-50 md:flex">
        <span className="grow basis-[30%] shrink py-[14px] px-[16px]">
          ارز دیجیتال
        </span>
        <span className="grow basis-[30%] shrink py-[14px] px-[16px] text-center">
          {" "}
          قیمت خرید
        </span>
        <span className="grow basis-[30%] shrink py-[14px] px-[16px] text-center">
          {" "}
          قیمت فروش
        </span>
        <span className="py-[14px] px-[16px] min-w-[148px] text-center">
          نمودار
        </span>
        <span className="py-[14px] px-[16px] min-w-[148px] text-center">
          تغییرات
        </span>
        <span className="py-[14px] px-[16px] w-[120px] text-center  whitespace-nowrap md:w-[94px]">
          نشان کردن
        </span>
        {/* <span className="grow basis-[30%] shrink">ارزش بازار</span> */}
      </div>
      {data.result.items.map((item, index) => (
        <>
          <div className="flex py-1 border-b">
            <div className="flex items-center  grow shrink max-w-[45%]  md:basis-[30%]">
              <div className="mx-2">
                <Image
                  src={item.icon}
                  layout="fixed"
                  height={32}
                  width={32}
                  alt=""
                />
              </div>
              <div className="">
                <h2>{item.enName}</h2>
                <div className="flex">
                  <div className="w-[15px] h-[15px] bg-gray-300 flex items-center justify-center rounded-sm mr-1">
                    <span className="mt-1 text-sm text-gray-600">
                      {index + 1}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">{item.coin}</span>
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:basis-[30%] md:grow md:shrink md:justify-center md:items-center">
              <span className="text-xs font-normal text-slate-400 ">خرید </span>
              <span className="basis-[88px]  overflow-hidden text-left">
                {Math.round(12345678)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </div>
            <div className="hidden md:flex md:basis-[30%] md:grow md:shrink md:justify-center md:items-center">
              <span className="text-xs font-normal text-slate-400 ">خرید </span>
              <span className="basis-[88px]  overflow-hidden text-left">
                {Math.round(12345678)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </div>
            {/* chart */}
            <div className="hidden md:flex md:justify-center md:items-center h-[40px] text-center min-w-[148px] grow-0 shrink-0">
              نمودار
            </div>
            {/* changes */}
            <div className="hidden md:flex md:justify-center md:items-center h-[40px] text-center min-w-[148px] grow-0 shrink-0">
              نمودار
            </div>
            <div className="w-[45%] md:hidden ">
              {false && (
                <>
                  <div className="">
                    <PriceLine
                      price={item.price * data.result.meta.prices.buy}
                      buy
                    />
                    <PriceLine
                      price={item.price * data.result.meta.prices.sell}
                    />
                  </div>
                </>
              )}
              {true && (
                <>
                  <div className="flex items-center">
                    <div className="w-[50%]">
                      <ChartApp />
                    </div>
                    <div className="ml-1">
                      <div className="flex">
                        <span className="mr-1">476741.01</span>
                        <Image
                          src="/teter.png"
                          layout="fixed"
                          width={14}
                          height={14}
                        />
                      </div>
                      <span className="text-xs text-gray-600">
                        MCap,6,181,27M
                      </span>
                    </div>
                  </div>{" "}
                </>
              )}
            </div>
            <div className="flex justify-center items-center w-[5%] md:w-[94px]">
              <AiOutlineStar size={20} />
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default Table;
