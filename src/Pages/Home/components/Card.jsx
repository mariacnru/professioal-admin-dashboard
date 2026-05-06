import React from "react";
import { RiArrowUpLine } from "react-icons/ri";

function Card({ title, total, totalTitle, increase, lastSevenDays }) {
  return (
    <div className="bg-white w-full rounded-md p-5 shadow-lg shadow-gray-200">
      <div className="">
        <span className="font-MorabbaMedium block">{title}</span>
        <span className="text-gray-400 text-sm">7 روز گذشته</span>
      </div>

      <div className="space-x-2 flex items-center mt-2">
        <span className="text-xl font-DanaDemiBold">
          {total.toLocaleString()}
        </span>
        <span className="text-sm">{totalTitle}</span>
        <span className="text-green-400 flex gap-1 text-sm">
          {increase}%
          <RiArrowUpLine />
        </span>
      </div>

      <div className="flex gap-2 text-sm mt-2">
        <span className="text-gray-400 text-sm">7 روز گذشته</span>
        <span className="text-blue-700 font-DanaDemiBold">
          (${lastSevenDays})
        </span>
      </div>

      <button className="border border-blue-500 text-blue-500 text-sm py-1 px-2 mt-5 rounded-full w-20">
        جزییات
      </button>
    </div>
  );
}

export default Card;
