import React, { useState, useEffect } from "react";
import { RiCloseLine } from "react-icons/ri";

function EditCustomerModal({ modal, setModal, id, data, setData }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [orders, setOrders] = useState("");
  const [spent, setSpent] = useState("");

  useEffect(() => {
    if (id && data) {
      const customerToEdit = data.find((item) => item.id === id);

      console.log(customerToEdit);

      if (customerToEdit) {
        setName(customerToEdit.name);
        setLocation(customerToEdit.location);
        setOrders(customerToEdit.orders);
        setSpent(customerToEdit.spent);
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

    setModal(false);
  };

  return (
    <div
      className={`bg-black/50 w-full h-full fixed top-13.5 left-0 z-10 ${modal ? "inline" : "hidden"} p-4`}
    >
      <div className="space-y-2 mt-2.5 w-120 max-w-full h-fit bg-white mx-auto rounded-lg p-5 relative">
        <div
          onClick={() => setModal(false)}
          className="bg-red-50 flex justify-center p-1 rounded-sm hover:bg-red-100 transition-colors cursor-pointer"
        >
          <RiCloseLine size={20} />
        </div>

        <h2 className="font-MorabbaMedium border-x-4 border-gray-900 text-center mb-5 p-2">
          ویرایش محصول
        </h2>

        <div className="w-full space-y-2">
          <div className="space-y-1">
            <span className="text-gray-500 font-MorabbaLight block">نام</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="نام را وارد کنید..."
              className="border border-blue-200 p-2 rounded-sm w-full text-sm hover:bg-blue-50 hover:border-blue-300 outline-0"
            />
          </div>

          <div className="space-y-1">
            <span className="text-gray-500 font-MorabbaLight block">
              موقعیت مکانی
            </span>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder=" موقعیت مکانی را وارد کنید..."
              className="border border-blue-200 p-2 rounded-sm w-full text-sm hover:bg-blue-50 hover:border-blue-300 outline-0"
            />
          </div>

          <div className="space-y-1">
            <span className="text-gray-500 font-MorabbaLight block">
              تعداد سفارشات
            </span>
            <input
              type="text"
              value={orders}
              onChange={(e) => setOrders(e.target.value)}
              placeholder="  تعداد سفارشات را وارد کنید..."
              className="border border-blue-200 p-2 rounded-sm w-full text-sm hover:bg-blue-50 hover:border-blue-300 outline-0"
            />
          </div>

          <div className="space-y-1">
            <span className="text-gray-500 font-MorabbaLight block">
              پرداختی
            </span>
            <input
              type="text"
              value={spent}
              onChange={(e) => setSpent(e.target.value)}
              placeholder="پرداختی را وارد کنید..."
              className="border border-blue-200 p-2 rounded-sm w-full text-sm hover:bg-blue-50 hover:border-blue-300 outline-0"
            />
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
