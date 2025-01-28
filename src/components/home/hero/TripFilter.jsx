import React from "react";

export default function TripFilter() {
  return (
    <div className="hidden lg:block pt-20 md:pt-28">
      <div className="mx-auto px-4 flex items-center justify-around">
        <div className="relative text-teal-900 font-weight transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ">
          <button className="bg-[#DEE9E8] px-20 py-3 rounded-xl">Filter</button>
        </div>
        <div className="relative text-teal-900 font-weight transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ">
          <button className="bg-[#DEE9E8] px-20 py-3 rounded-xl ">Sort</button>
        </div>
      </div>
    </div>
  );
}
