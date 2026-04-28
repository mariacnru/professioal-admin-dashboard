import React from "react";

function Header({ handleScroll }) {
  return (
    <div className="flex justify-between items-center my-5">
      <h3 className="font-MorabbaMedium">دسته بندی ها</h3>
      <div className="space-x-5">
        <button
          onClick={handleScroll}
          className="bg-blue-500 text-white py-1.5 px-2 text-sm rounded-sm hover:shadow-lg shadow-blue-200 transition-shadow cursor-pointer"
        >
          + اضافه کردن دسته بندی
        </button>
      </div>
    </div>
  );
}

export default Header;
