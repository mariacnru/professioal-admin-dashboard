import React from "react";
import { RiDeleteBin4Line } from "react-icons/ri";

function DeletCategorieCard({ title, deleteHandler, id }) {
  function getRandomHexColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor.padStart(6, "0")}`; // اطمینان از اینکه کد همیشه ۶ رقمی است
  }

  return (
    <div
      onClick={() => deleteHandler(id)}
      className="flex justify-between items-center gap-5 font-MorabbaMedium bg-white p-2 rounded-lg w-full h-fit"
    >
      <div className="flex items-center gap-5">
        <span>{id} | </span>
        <div
          className="w-20 h-20 rounded-md"
          style={{ backgroundColor: getRandomHexColor() }}
        ></div>
        <span className="">{title}</span>
      </div>
      <div className="text-gray-500 hover:text-gray-700 transition cursor-pointer">
        <RiDeleteBin4Line size={20} />
      </div>
    </div>
  );
}

export default DeletCategorieCard;
