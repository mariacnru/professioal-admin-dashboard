import React, { useState } from "react"; // useState را import کنید
import { RiDeleteBinLine, RiEditLine } from "react-icons/ri";
import EditProductModal from "./EditProductModal";
import DeleteModal from "./DeleteModal";

function DynamicTable({ columns, data, setData, onDelete }) {
  const [modal, setModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [flag, setFlag] = useState(false);

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
                <div className="w-12 h-12 rounded-sm bg-blue-400"></div>
                <div className="*:block">
                  <span>{item.product}</span>
                  <span className="text-gray-500">{item.type}</span>
                </div>
              </td>
              <td>موجود در انبار : {item.inventory}</td>
              <td>{item.color}</td>
              <td>{item.price}</td>
              <td>{item.rating}</td>
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

      <EditProductModal
        modal={modal}
        setModal={setModal}
        id={selectedItemId}
        data={data}
        setData={setData}
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
