import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

function DeleteModal({ flag, setFlag, deleteId, onDelete }) {
  return (
    <div
      className={`${flag ? "visible opacity-100" : "invisible opacity-0"} fixed inset-0 bg-black/50 flex items-center justify-center transition-opacity`}
    >
      <div className="max-w-xl w-full bg-white rounded-md shadow-lg p-6">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-sm">حذف آیتم</h3>
          <span onClick={() => setFlag(false)}>
            <RiCloseLine />
          </span>
        </div>

        <p className="text-center my-8">
          آیا از حذف آیتم مورد نظر اطمینان دارید ؟
        </p>
        <div className="space-x-2">
          <button
            onClick={() => {
              onDelete(deleteId);
              setFlag(false);
            }}
            className="bg-red-500 py-1.5 px-5 rounded-sm text-sm text-white hover:bg-red-700 transition-colors cursor-pointer"
          >
            حذف
          </button>
          <button
            onClick={() => setFlag(false)}
            className="py-1.5 px-5 rounded-sm text-sm text-red-500 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            لغو
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
