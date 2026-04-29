import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

function EditProductModal({ modal, setModal }) {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div
      className={`bg-black/50 w-full h-full absolute top-0 pt-15 ${modal ? "inline" : "hidden"}`}
    >
      <div className="space-y-2 w-100 h-fit bg-white mx-auto rounded-lg p-5">
        <div
          onClick={() => setModal(false)}
          className="bg-red-50 flex justify-center p-1 mb-2 rounded-sm hover:bg-red-100 transition-colors cursor-pointer"
        >
          <RiCloseLine size={20} />
        </div>

        <h2 className="font-MorabbaMedium border-x-4 border-gray-900 text-center mb-5">
          ویرایش محصول
        </h2>

        <div className="">
          <span className="text-gray-500 font-MorabbaLight">عنوان</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="عنوان را وارد کنید..."
            className="border border-blue-200 p-2 rounded-sm w-full text-sm hover:bg-blue-50 hover:border-blue-300 outline-0 cursor-pointer"
          />
        </div>

        <div className="">
          <span className="text-gray-500 font-MorabbaLight">تعداد</span>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            placeholder="تعداد را وارد کنید..."
            className="border border-blue-200 p-2 rounded-sm w-full text-sm hover:bg-blue-50 hover:border-blue-300 outline-0 cursor-pointer"
          />
        </div>

        <div className="">
          <span className="text-gray-500 font-MorabbaLight">رنگ</span>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="رنگ را وارد کنید..."
            className="border border-blue-200 p-2 rounded-sm w-full text-sm hover:bg-blue-50 hover:border-blue-300 outline-0 cursor-pointer"
          />
        </div>

        <div className="">
          <span className="text-gray-500 font-MorabbaLight">قیمت</span>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="قیمت را وارد کنید..."
            className="border border-blue-200 p-2 rounded-sm w-full text-sm hover:bg-blue-50 hover:border-blue-300 outline-0 cursor-pointer"
          />
        </div>

        <button className="bg-red-500 text-white w-full text-sm p-2 mt-2 rounded-sm hover:shadow-red-200 hover:shadow-lg transition-shadow cursor-pointer">
          ادیت محصول
        </button>
      </div>
    </div>
  );
}

export default EditProductModal;
