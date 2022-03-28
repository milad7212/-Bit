import React from "react";

function Table({ data }) {
  return (
    <div>
      {data.result.items.map((e) => (
        <>
          <div>{e.faName}</div>
        </>
      ))}
    </div>
  );
}

export default Table;
