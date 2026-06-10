import React, { useState } from "react"; // useState را import کنید
import { RiDeleteBinLine, RiEditLine } from "react-icons/ri";
import EditOrderModal from "./EditOrderModal";

function DynamicTable({ columns, data, allData, setData, onDelete }) {
  const [modal, setModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleEditClick = (itemId) => {
    setModal(true);
    setSelectedItemId(itemId);
  };

  return (
    <>
      <table className="w-full *:text-sm">
        <thead>
          <tr className="*:p-5 *:text-start *:text-gray-500 border-b-2 border-gray-200">
            {columns.map((item) => (
              <td key={item.id}>{item.title}</td>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id} className="*:px-5 *:py-2">
              <td>{item.id}</td>
              <td className="flex items-center gap-5">
                <div className="*:block">
                  <span>{item.date}</span>
                  <span className="text-gray-500">{item.type}</span>
                </div>
              </td>
              <td>{item.customer}</td>
              <td>
                <span
                  className={`
                  ${item.paymentStatus === "Refunded" ? "bg-blue-500" : ""} 
                  ${item.paymentStatus === "Pending" ? "bg-purple-500" : ""} 
                  ${item.paymentStatus === "Paid" ? "bg-green-500" : ""} 
                  ${item.paymentStatus === "Failed" ? "bg-gray-500" : ""} 
                  px-1 rounded-sm text-white pt-0.5 text-xs`}
                >
                  {item.paymentStatus}
                </span>
              </td>
              <td>
                <span
                  className={`${item.orderStatus === "Delivered" ? "bg-blue-500" : ""} 
                  ${item.orderStatus === "Canceled" ? "bg-red-500" : ""} 
                  ${item.orderStatus === "Processing" ? "bg-amber-500" : ""} 
                  ${item.orderStatus === "Shipped" ? "bg-purple-500" : ""} 
                  ${item.orderStatus === "Returned" ? "bg-gray-500" : ""} 
                  px-1 rounded-sm text-white pt-0.5 text-xs`}
                >
                  {item.orderStatus}
                </span>
              </td>
              <td>{item.price}</td>
              <td className="flex space-x-2">
                <button
                  onClick={() => handleEditClick(item.id)} // با کلیک، id آیتم ارسال می‌شود
                  className="flex items-center gap-2 text-xs text-blue-500 border border-gray-300 hover:bg-gray-100 p-2 rounded-sm transition-colors cursor-pointer"
                >
                  ادیت <RiEditLine />
                </button>
                <button
                  onClick={() => onDelete(item.id)}
                  className="flex items-center gap-2 text-xs text-blue-500 border border-gray-300 hover:bg-gray-100 p-2 rounded-sm transition-colors cursor-pointer"
                >
                  حذف <RiDeleteBinLine />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <EditOrderModal
        modal={modal}
        setModal={setModal}
        id={selectedItemId}
        data={data}
        setOrders={setData}
      />
    </>
  );
}

export default DynamicTable;
