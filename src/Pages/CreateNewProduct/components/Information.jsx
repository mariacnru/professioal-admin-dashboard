import React, { useState } from "react";

function Information({ onAddProduct }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

  const product = {
    id: Date.now(),
    title,
    description,
    price,
    discount,
  };

  const handleAddProduct = () => {
    if (!title || !price) {
      alert("لطفاً نام و قیمت محصول را وارد کنید.");
      return;
    }

    onAddProduct(product);

    setTitle("");
    setDescription("");
    setPrice("");
    setDiscount("");
  };

  return (
    <div className="p-5 bg-white w-full rounded-md">
      <h3 className="font-MorabbaMedium mb-5">اطلاعات محصول</h3>

      <div className="space-y-2">
        <div className="border-b-2 border-blue-100 pb-8 space-y-5">
          {/* Title */}
          <label htmlFor="title" className="text-sm text-gray-700">
            اسم محصول
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="تیشرت تابستانی"
            className="w-full text-sm border border-gray-300 rounded-sm py-1 px-3 block hover:bg-blue-50/30 hover:border-blue-300 focus:bg-blue-50/50 focus:border-blue-300 transition-colors"
          />

          {/* Description */}
          <label htmlFor="description" className="text-sm text-gray-700">
            توضیحات محصول
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="توضیحات محصول"
            className="w-full h-20 text-sm resize-none border border-gray-300 rounded-sm py-1 px-3 block hover:bg-blue-50/30 hover:border-blue-300 focus:bg-blue-50/50 focus:border-blue-300 transition-colors"
          />
        </div>

        {/* Price */}
        <div className="space-y-5 mt-5">
          <label htmlFor="price" className="text-sm text-gray-700">
            قیمت محصول
          </label>
          <input
            id="price"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="قیمت را وارد کنید"
            className="w-full text-sm border border-gray-300 rounded-sm py-1 px-3 block hover:bg-blue-50/30 hover:border-blue-300 focus:bg-blue-50/50 focus:border-blue-300 transition-colors"
          />

          <label htmlFor="discount" className="text-sm text-gray-700">
            قیمت با تخفیف
          </label>
          <input
            id="discount"
            type="text"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            placeholder="قیمت با تخفیف را وارد کنید"
            className="w-full text-sm border border-gray-300 rounded-sm py-1 px-3 block hover:bg-blue-50/30 hover:border-blue-300 focus:bg-blue-50/50 focus:border-blue-300 transition-colors"
          />
        </div>
      </div>

      <button
        onClick={handleAddProduct}
        className="bg-blue-500 text-white text-sm mt-5 py-1 px-2 rounded-sm w-full hover:shadow-blue-200 shadow-lg transition-colors cursor-pointer"
      >
        اضافه کردن محصول
      </button>
    </div>
  );
}

export default Information;
