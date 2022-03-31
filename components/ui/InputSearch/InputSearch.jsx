import React from "react";
import { VscSearch, VscSettings } from "react-icons/vsc";
function InputSearch({onChange}) {
  return (
    <div className="flex items-center p-2 mt-4 mb-2 border rounded-lg md:basis-[33.33%] md:max-w-[33.33%] md:my-0 md:ml-5">
      <div className="ml-2 ">
        <VscSearch size={18} color="#999DA4" />
      </div>
      <input
      onChange={(e)=>onChange(e.target.value)}
        className="px-1 py-1 outline-none text-grey-darkest  w-[100%]"
        placeholder="جستجو"
      />

      <div className="pr-2 ml-2 border-r-2 sm:hidden">
        <VscSettings size={25} color="#999DA4" />
      </div>
    </div>
  );
}

export default InputSearch;
