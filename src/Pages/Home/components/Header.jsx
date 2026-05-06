import React from "react";
import { NavLink } from "react-router";

function Header() {
  return (
    <div className="flex justify-between items-center my-5">
      <h3 className="font-MorabbaMedium">داشیورد</h3>
      <div className="space-x-5">
        <NavLink
          to={"/createNewProduct"}
          className="bg-blue-500 text-white py-1.5 px-2 text-sm rounded-sm hover:shadow-lg shadow-blue-200 transition-shadow cursor-pointer"
        >
          + اضافه کردن محصول
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
