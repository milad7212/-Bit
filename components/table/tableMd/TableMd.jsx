import Image from "next/image";
import React from "react";
import { AiFillCaretUp } from "react-icons/ai";
import { NumberApp, NumberAppRound } from "../../../utils/NumberApp";
import ChartApp from "../../ui/Chart/Chart";

const ItemTable = ({ content, children, unit }) => {
  return (
    <div className="hidden md:flex md:basis-[30%] md:grow md:shrink md:justify-center md:items-center">
      <span className="basis-[90px]  overflow-hidden text-left">{content}</span>

      <span className="text-xs font-normal text-slate-400 ml-2 ">
        {unit ? unit : { children }}{" "}
      </span>
    </div>
  );
};

function TableMd({ item, data, unitTable }) {
  return (
    <>
      {unitTable == "toman" ? (
        <>
          <ItemTable
            content={NumberAppRound(item.price * data.result.meta.prices.buy)}
            unit="تومان"
          />

          <ItemTable
            content={NumberAppRound(item.price * data.result.meta.prices.sell)}
            unit="تومان"
          />
        </>
      ) : (
        <>
          <div className="hidden md:flex md:basis-[30%] md:grow md:shrink md:justify-center md:items-center">
            <span className="basis-[90px]  overflow-hidden text-left">
              {NumberApp(item.price)}
            </span>
            <span className="text-xs font-normal text-slate-400 ml-2 ">
              <Image
                src="/teter.png"
                layout="fixed"
                width={14}
                height={14}
                alt="icon"
              />
            </span>
          </div>

          <ItemTable content={NumberApp(item.quote)} unit="USDT" />
        </>
      )}

      {/* chart */}
      <div className="hidden md:flex md:justify-center md:items-center h-[40px] text-center min-w-[148px] grow-0 shrink-0">
      <ChartApp/>
      </div>
      {/* changes */}
      <div className="hidden md:flex md:justify-center md:items-center h-[40px] text-center min-w-[148px] grow-0 shrink-0">
        
        <span className=" font-bold text-green-500 flex">
          <span className="mr-1">

        <AiFillCaretUp/>
          </span>
            {`1.67 %`}
        
        </span>
      </div>
    </>
  );
}

export default TableMd;
