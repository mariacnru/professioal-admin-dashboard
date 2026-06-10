import React from "react";
import { FaBox, FaMoneyBillAlt, FaUsers } from "react-icons/fa";
import { RiArrowUpLine } from "react-icons/ri";

function Card({ title, total, totalTitle, increase, lastSevenDays }) {
  return (
    <div className="bg-white w-full rounded-md p-5 shadow-lg shadow-gray-200">
      <div className="flex justify-between items-center border-b border-gray-200 pb-5">
        <div>
          <span className="font-MorabbaMedium block">{title}</span>
          <span className="text-gray-400 text-sm">7 روز گذشته</span>
        </div>

        <div>
          {title === "همه سفارشات" && (
            <div className="bg-indigo-500 text-white p-5 rounded-full">
              <FaBox size={20} />
            </div>
          )}
          {title === "همه کاربران" && (
            <div className="bg-lime-500 text-white p-5 rounded-full">
              <FaUsers size={20} />
            </div>
          )}
          {title === "همه فروش" && (
            <div className="bg-pink-500 text-white p-5 rounded-full">
              <FaMoneyBillAlt size={20} />
            </div>
          )}
        </div>
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
    </div>
  );
}

export default Card;
