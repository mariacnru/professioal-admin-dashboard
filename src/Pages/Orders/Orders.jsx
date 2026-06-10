import React, { useState } from "react";
import Header from "./components/Header";
import DynamicTable from "./components/DynamicTable";
import { RiSearch2Line } from "react-icons/ri";
import ordersData from "../../Data/ordersData";

function Orders() {
  const [orders, setOrders] = useState(ordersData);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const columns = [
    { id: "id", title: "آیدی" },
    { id: "date", title: "تاریخ" },
    { id: "customer", title: "نام مشتری" },
    { id: "paymentStatus", title: "وضعیت پرداختی" },
    { id: "orderStatus", title: "وضعیت سفارش" },
    { id: "price", title: "مبلغ" },
    { id: "action", title: "اکشن" },
  ];

  // سرچ
  const filteredData = (() => {
    const term = searchInput.trim().toLowerCase();

    if (!term) return orders;

    return orders.filter((item) => item.customer.toLowerCase().includes(term));
  })();

  // pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // next page
  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  // prev page
  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  // change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // generate buttons
  const generatePageButtons = () => {
    const buttons = [];

    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 rounded ${
            currentPage === i ? "bg-gray-700 text-white" : "bg-gray-200"
          }`}
        >
          {i}
        </button>,
      );
    }

    return buttons;
  };

  // delete order
  const deleteProduct = (id) => {
    setOrders((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="relative">
      <div className="p-10">
        <Header />

        <div className="bg-white rounded-xl">
          <div className="p-5 flex justify-between items-center">
            <label className="flex items-center gap-2 w-2xs border border-gray-300 rounded-sm p-2">
              <span className="text-gray-500">
                <RiSearch2Line />
              </span>

              <input
                type="text"
                placeholder="جستجو..."
                className="outline-0 text-sm"
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </label>

            <h3 className="font-MorabbaMedium">
              تعداد سفارشات : {orders.length}
            </h3>
          </div>

          <DynamicTable
            columns={columns}
            data={currentItems}
            allData={orders}
            setData={setOrders}
            onDelete={deleteProduct}
          />

          {/* Pagination */}
          <div className="flex justify-center mt-4 space-x-2 pb-5">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded ${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 text-white cursor-pointer"
              }`}
            >
              قبلی
            </button>

            {generatePageButtons()}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded ${
                currentPage === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 text-white cursor-pointer"
              }`}
            >
              بعدی
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
