import React, { useState, useEffect } from "react";
import { RiCloseLine } from "react-icons/ri";

function EditCustomerModal({ modal, setModal, id, data, setData }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [orders, setOrders] = useState("");
  const [spent, setSpent] = useState("");

  useEffect(() => {
    if (id && data) {
      const productToEdit = data.find((item) => item.id === id);

      if (productToEdit) {
        setName(productToEdit.product);
        setLocation(productToEdit.inventory);
        setOrders(productToEdit.color);
        setSpent(productToEdit.price);
      }
    }

    if (!modal) {
      setName("");
      setLocation("");
      setOrders("");
      setSpent("");
    }
  }, [id, modal, data]);

  const handleSaveClick = () => {
    const updatedProduct = {
      id: id,
      name: name,
      location: location,
      orders: orders,
      spent: spent,
    };

    if (setData) {
      setData((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id ? updatedProduct : product,
        ),
      );
    }
    console.log(updatedProduct);

    setModal(false);
  };

  return (
    <div
      className={`bg-black/50 w-full h-full absolute top-0 left-0 z-10 ${modal ? "inline" : "hidden"} p-4`}
    >
      <div className="space-y-2 mt-5 w-120 max-w-full h-fit bg-white mx-auto rounded-lg p-5 relative">
        <div
          onClick={() => setModal(false)}
          className="bg-red-50 flex justify-center p-1 rounded-sm hover:bg-red-100 transition-colors cursor-pointer"
        >
          <RiCloseLine size={20} />
        </div>

        <h2 className="font-MorabbaMedium border-x-4 border-gray-900 text-center mb-5 p-2">
          ویرایش محصول
        </h2>

        <div className="flex gap-2">
          <div className="w-full">
            <div className="space-y-1">
              <span className="text-gray-500 font-MorabbaLight block">
                عنوان
              </span>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="عنوان را وارد کنید..."
                className="border border-blue-200 p-2 rounded-sm w-full text-sm hover:bg-blue-50 hover:border-blue-300 outline-0"
              />
            </div>

            <div className="space-y-1">
              <span className="text-gray-500 font-MorabbaLight block">
                تعداد
              </span>
              <input
                type="text"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                placeholder="تعداد را وارد کنید..."
                className="border border-blue-200 p-2 rounded-sm w-full text-sm hover:bg-blue-50 hover:border-blue-300 outline-0"
              />
            </div>

            <div className="space-y-1">
              <span className="text-gray-500 font-MorabbaLight block">رنگ</span>
              <input
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                placeholder="رنگ را وارد کنید..."
                className="border border-blue-200 p-2 rounded-sm w-full text-sm hover:bg-blue-50 hover:border-blue-300 outline-0"
              />
            </div>
          </div>

          <div className="w-full">
            <div className="space-y-1">
              <span className="text-gray-500 font-MorabbaLight block">
                قیمت
              </span>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="قیمت را وارد کنید..."
                className="border border-blue-200 p-2 rounded-sm w-full text-sm hover:bg-blue-50 hover:border-blue-300 outline-0"
              />
            </div>

            <div className="space-y-1">
              <span className="text-gray-500 font-MorabbaLight block">
                قیمت
              </span>
              <input
                type="text"
                value={type}
                onChange={(e) => setType(e.target.value)}
                placeholder="تایپ را وارد کنید..."
                className="border border-blue-200 p-2 rounded-sm w-full text-sm hover:bg-blue-50 hover:border-blue-300 outline-0"
              />
            </div>

            <div className="space-y-1">
              <span className="text-gray-500 font-MorabbaLight block">
                قیمت
              </span>
              <input
                type="text"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                placeholder="امتیاز را وارد کنید..."
                className="border border-blue-200 p-2 rounded-sm w-full text-sm hover:bg-blue-50 hover:border-blue-300 outline-0"
              />
            </div>
          </div>
        </div>

        <button
          onClick={handleSaveClick}
          className="bg-blue-500 text-white w-full text-sm p-2 mt-4 rounded-sm hover:shadow-lg transition-shadow cursor-pointer"
        >
          ذخیره تغییرات
        </button>
      </div>
    </div>
  );
}

export default EditCustomerModal;
