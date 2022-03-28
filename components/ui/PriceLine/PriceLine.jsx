import React from "react";

function PriceLine({ price = "price", buy }) {
  return (
    <>
      <div style={{direction:'rtl',textAlign:'right'}} className="flex justify-end">
        <div className="w-[52px] flex justify-between">
          {buy ? <span>خرید </span> : <span>فروش </span>}
          <span>:</span>
        </div>
        <span className="basis-[85px]  overflow-hidden text-left">{price}</span>
        <span>تومان</span>
      </div>
    </>
  );
}

export default PriceLine;
