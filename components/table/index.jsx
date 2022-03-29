import Image from "next/image";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import PriceLine from "../ui/PriceLine/PriceLine";
function Table({ data }) {
  return (
    <div style={{ direction: "ltr" }}>
      {data.result.items.map((item, index) => (
        <>
          <div className="flex py-1 border-b">
            <div className="flex items-center flex-grow shrink max-w-[45%] md:max-w-[100%]">
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
            <div className="w-[45%]">
              {true && (
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
              {false && <> </>}
            </div>
            <div className="flex justify-center items-center w-[5%]">
              <AiOutlineStar size={20} />
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default Table;
