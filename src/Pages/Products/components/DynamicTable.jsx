import React from "react";
import { RiDeleteBinLine, RiEditLine } from "react-icons/ri";

function DynamicTable({ columns, data }) {
  function getRandomHexColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor.padStart(6, "0")}`; // اطمینان از اینکه کد همیشه ۶ رقمی است
  }

  return (
    <table className="w-full *:text-sm">
      <thead>
        <tr className="*:p-5 *:text-start *:text-gray-500 border-b-2 border-gray-200">
          {columns.map((item) => (
            <td key={item.id}>{item.title}</td>
          ))}
        </tr>
      </thead>

      <tbody className=" divide-y divide-gray-200">
        {data.map((item) => (
          <tr key={item.id} className="*:px-5 *:py-2">
            <td>{item.id}</td>
            <td className="flex items-center gap-5">
              <div
                style={{ backgroundColor: getRandomHexColor() }}
                className="w-12 h-12 rounded-sm"
              ></div>
              <div className="*:block">
                <span>{item.product}</span>
                <span className="text-gray-500">{item.type}</span>
              </div>
            </td>
            <td>موجود در انبار : {item.inventory}</td>
            <td>{item.color}</td>
            <td>{item.price}</td>
            <td>{item.rating}</td>
            <td className="space-x-2">
              <button className="text-blue-500 border border-gray-300 hover:bg-gray-100 p-2 rounded-sm transition-colors cursor-pointer">
                <RiEditLine />
              </button>
              <button className="text-blue-500 border border-gray-300 hover:bg-gray-100 p-2 rounded-sm transition-colors cursor-pointer">
                <RiDeleteBinLine />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DynamicTable;
