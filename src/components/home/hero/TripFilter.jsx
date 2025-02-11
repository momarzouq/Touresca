import React from "react";

export default function TripFilter() {
  return (
    <div className="hidden lg:block px-4 pt-20 md:pt-28">
      <div className=" flex items-center justify-around lg:gap-1">
        <div className="relative w-full text-teal-900 font-weight transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ">
          <button className="bg-[#DEE9E8] w-full px-6 py-3 rounded-xl">Filter</button>
        </div>
        <div className="relative w-full text-teal-900 font-weight transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ">
          <button className="bg-[#DEE9E8] w-full  px-6 py-3 rounded-xl ">Sort</button>
        </div>
      </div>
    </div>
  );
}
