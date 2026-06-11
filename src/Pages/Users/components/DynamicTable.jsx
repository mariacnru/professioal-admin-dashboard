import React, { useState } from "react";
import { RiDeleteBinLine, RiEditLine } from "react-icons/ri";
import EditCustomerModal from "./EditCustomerModal";
import DeleteModal from "./DeleteModal";

function DynamicTable({ col, customers, onDelete, data, setCustomers }) {
  const [modal, setModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [flag, setFlag] = useState(false);

  const handleEditClick = (itemId) => {
    setModal(true);
    setSelectedCustomer(itemId);
  };

  return (
    <>
      <table className="w-full *:text-sm">
        <thead>
          <tr className="*:p-5 *:text-start *:text-gray-500 border-b-2 border-gray-200">
            {col.map((item) => (
              <td key={item.id}>{item.title}</td>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {customers.map((item) => (
            <tr key={item.id} className="*:px-5 *:py-2">
              <td>{item.id}</td>
              <td>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex justify-center items-center font-MorabbaMedium text-xl">
                    <span>{item.name.slice(0, 1)}</span>
                  </div>
                  <span className="font-DanaMedium">{item.name}</span>
                </div>
              </td>
              <td>{item.location}</td>
              <td>{item.orders}</td>
              <td>{item.spent.toLocaleString()}</td>
              <td className="flex space-x-2">
                <button
                  onClick={() => handleEditClick(item.id)} // با کلیک، id آیتم ارسال می‌شود
                  className="flex items-center gap-2 text-xs text-blue-500 border border-gray-300 hover:bg-gray-100 p-2 rounded-sm transition-colors cursor-pointer"
                >
                  ادیت <RiEditLine />
                </button>
                <button
                  onClick={() => {
                    setDeleteId(item.id);
                    setFlag(true);
                  }}
                  className="flex items-center gap-2 text-xs text-blue-500 border border-gray-300 hover:bg-gray-100 p-2 rounded-sm transition-colors cursor-pointer"
                >
                  حذف <RiDeleteBinLine />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <EditCustomerModal
        modal={modal}
        setModal={setModal}
        id={selectedCustomer}
        data={data}
        setData={setCustomers}
      />

      <DeleteModal
        flag={flag}
        setFlag={setFlag}
        deleteId={deleteId}
        onDelete={onDelete}
      />
    </>
  );
}

export default DynamicTable;
