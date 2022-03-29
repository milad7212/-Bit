import React from "react";

function PriceLine({ price = "price", buy }) {
  return (
    <>
      <div
        style={{ direction: "rtl", textAlign: "right" }}
        className="flex items-center justify-end"
      >
        <div className="w-[40px] flex justify-between">
          {buy ? (
            <span className="text-xs font-normal text-slate-400 ">خرید </span>
          ) : (
            <span className="text-xs font-normal text-slate-400">فروش </span>
          )}
          <span className="text-xs font-normal text-slate-400">:</span>
        </div>
        <span className="basis-[88px]  overflow-hidden text-left">
          {Math.round(price)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
        <span className="mr-2 text-xs font-normal text-slate-400">تومان</span>
      </div>
    </>
  );
}

export default PriceLine;
