import Image from "next/image";
import React from "react";

function Table({ data }) {
  return (
    <div style={{direction:'ltr'}}>
      {data.result.items.map((item,index) => (
        <>
          <div className="flex">
            <div className="flex flex-grow">
              <div className="">
                <Image src={item.icon} layout='fixed' height={32} width={32} alt=''/>
              </div>
              <div className="">
                <h2>{item.enName}</h2>
                <div className="flex">
                  <span>{index+1}</span>
                  <span>{item.coin}</span>
                </div>
              </div>
              
            
            </div>
            <div className="">{item.faName}</div>
            <div className="">{item.faName}</div>
            <div className="">{item.faName}</div>
            
            </div>
        </>
      ))}
    </div>
  );
}

export default Table;
