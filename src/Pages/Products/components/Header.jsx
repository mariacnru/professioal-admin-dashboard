import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center my-5">
      <h3 className="font-MorabbaMedium">محصولات</h3>
      <div className="space-x-5">
        <button className="text-blue-500 bg-white py-1.5 px-4 text-sm rounded-sm border border-gray-300 hover:shadow-lg shadow-blue-200 transition-shadow cursor-pointer">
          چاپ
        </button>
        <button className="bg-blue-500 text-white py-1.5 px-2 text-sm rounded-sm hover:shadow-lg shadow-blue-200 transition-shadow cursor-pointer">
          + اضافه کردن محصول
        </button>
      </div>
    </div>
  );
}

export default Header;
