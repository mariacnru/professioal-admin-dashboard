import React from "react";
import { NavLink } from "react-router";

function Header() {
  return (
    <div className="flex justify-between items-center my-5">
      <h3 className="font-MorabbaMedium">سفارشات</h3>
      <div className="space-x-5">
        <button className="text-slate-800 bg-white py-1.5 px-4 text-sm rounded-sm border border-gray-300 hover:shadow-lg shadow-blue-200 transition-shadow cursor-pointer">
          چاپ
        </button>
      </div>
    </div>
  );
}

export default Header;
