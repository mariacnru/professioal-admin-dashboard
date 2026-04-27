import React from "react";
import { RiNotification2Line, RiSearch2Line } from "react-icons/ri";

function TopBar() {
  return (
    <div className="sticky top-0 bg-gray-900 text-white py-2 px-5 w-full flex justify-between items-center">
      <div className="flex items-center gap-4">
        <RiSearch2Line />
        <input
          type="text"
          placeholder="جستجو..."
          className="outline-0 placeholder-gray-200 text-sm cursor-pointer"
        />
      </div>
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <span className="font-MorabbaMedium">دیاکو</span>
          <div className="bg-green-300 w-10 h-10 rounded-full"></div>
        </div>

        <div className="">
          <RiNotification2Line />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
