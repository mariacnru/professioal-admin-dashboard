import React from "react";

function Card({ title, itemCount }) {
  function getRandomHexColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor.padStart(6, "0")}`; // اطمینان از اینکه کد همیشه ۶ رقمی است
  }

  return (
    <div className="bg-white">
      <div
        style={{ backgroundColor: getRandomHexColor() }}
        className="w-full h-50 rounded-t-md"
      ></div>
      <div className="p-5">
        <span className="block font-MorabbaMedium">{title}</span>
        <span className="text-sm text-gray-500">آیتم : {itemCount} عدد</span>
      </div>
    </div>
  );
}

export default Card;
