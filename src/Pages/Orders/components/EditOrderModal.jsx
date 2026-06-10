import React, { useState, useEffect } from "react";
import { RiCloseLine } from "react-icons/ri";

function EditOrderModal({ modal, setModal, id, data, setOrders }) {
  const [date, setDate] = useState("");
  const [customer, setCustomer] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (id && data) {
      const orderToEdit = data.find((item) => item.id === id);

      if (orderToEdit) {
        setDate(orderToEdit.date);
        setCustomer(orderToEdit.customer);
        setPaymentStatus(orderToEdit.paymentStatus);
        setOrderStatus(orderToEdit.orderStatus);
        setPrice(orderToEdit.price);
      }
    }

    if (!modal) {
      setDate("");
      setCustomer("");
      setPaymentStatus("");
      setOrderStatus("");
      setPrice("");
    }
  }, [id, modal, data]);

  const handleSaveClick = () => {
    const updatedOrder = {
      id,
      date,
      customer,
      paymentStatus,
      orderStatus,
      price,
      action: "View",
    };

    if (setOrders) {
      setOrders((prevOrders) =>
        prevOrders.map((order) => (order.id === id ? updatedOrder : order)),
      );
    }

    setModal(false);
  };

  return (
    <div
      className={`bg-black/50 w-full h-full fixed top-13.5 left-0 z-10 ${
        modal ? "inline" : "hidden"
      } p-4`}
    >
      <div className="space-y-2 mt-5 w-120 max-w-full h-fit bg-white mx-auto rounded-lg p-5 relative">
        <div
          onClick={() => setModal(false)}
          className="bg-red-50 flex justify-center p-1 rounded-sm hover:bg-red-100 transition-colors cursor-pointer"
        >
          <RiCloseLine size={20} />
        </div>

        <h2 className="font-MorabbaMedium border-x-4 border-gray-900 text-center mb-5 p-2">
          ویرایش سفارش
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <span className="text-gray-500 font-MorabbaLight block">تاریخ</span>

            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="تاریخ را وارد کنید..."
              className="border border-blue-200 p-2 rounded-sm w-full text-sm hover:bg-blue-50 hover:border-blue-300 outline-0"
            />
          </div>

          <div className="space-y-1">
            <span className="text-gray-500 font-MorabbaLight block">
              نام مشتری
            </span>

            <input
              type="text"
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              placeholder="نام مشتری را وارد کنید..."
              className="border border-blue-200 p-2 rounded-sm w-full text-sm hover:bg-blue-50 hover:border-blue-300 outline-0"
            />
          </div>

          <div className="space-y-1">
            <span className="text-gray-500 font-MorabbaLight block">
              وضعیت پرداخت
            </span>

            <input
              type="text"
              value={paymentStatus}
              onChange={(e) => setPaymentStatus(e.target.value)}
              placeholder="وضعیت پرداخت را وارد کنید..."
              className="border border-blue-200 p-2 rounded-sm w-full text-sm hover:bg-blue-50 hover:border-blue-300 outline-0"
            />
          </div>

          <div className="space-y-1">
            <span className="text-gray-500 font-MorabbaLight block">
              وضعیت سفارش
            </span>

            <input
              type="text"
              value={orderStatus}
              onChange={(e) => setOrderStatus(e.target.value)}
              placeholder="وضعیت سفارش را وارد کنید..."
              className="border border-blue-200 p-2 rounded-sm w-full text-sm hover:bg-blue-50 hover:border-blue-300 outline-0"
            />
          </div>

          <div className="space-y-1 col-span-2">
            <span className="text-gray-500 font-MorabbaLight block">مبلغ</span>

            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="مبلغ را وارد کنید..."
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

export default EditOrderModal;
