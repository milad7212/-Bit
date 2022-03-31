import Image from "next/image";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import ChartApp from "../ui/Chart/Chart";

import PriceLine from "../ui/PriceLine/PriceLine";
import TableMd from "./tableMd/TableMd";
function Table({ data, unitTable }) {
  return (
    <div style={{ direction: "ltr" }}>
      <div className="hidden p-2 rounded-md bg-gray-50 md:flex">
        <span className="grow basis-[30%] shrink py-[14px] px-[16px]">
          ارز دیجیتال
        </span>
        <span className="grow basis-[30%] shrink py-[14px] px-[16px] text-center">
         
        {unitTable=='toman'? 'قیمت خرید':'قیمت جهانی'}

        </span>
        <span className="grow basis-[30%] shrink py-[14px] px-[16px] text-center">
          {" "}

          {unitTable=='toman'? 'قیمت فروش':'ارزش بازار'}

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
          <div key={index} className="flex  border-b py-4">
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
            <TableMd unitTable={unitTable} item={item} data={data} />
            <div className="w-[45%] md:hidden ">
              {unitTable == "toman" ? (
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
              ) : (
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
                          alt="icon"
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
