import React from "react";

function Card({ title, itemCount }) {
  return (
    <div className="bg-white">
      <div
        className="w-full h-50 rounded-t-md bg-blue-400"
      ></div>
      <div className="p-5">
        <span className="block font-MorabbaMedium">{title}</span>
        <span className="text-sm text-gray-500">آیتم : {itemCount} عدد</span>
      </div>
    </div>
  );
}

export default Card;
