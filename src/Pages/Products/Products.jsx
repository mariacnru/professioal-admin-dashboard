import React, { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import DynamicTable from "./components/DynamicTable";
import { RiSearch2Line } from "react-icons/ri";
import productsData from "../../Data/productsData";

function Products() {
  const [products, setProducts] = useState(productsData);
  const [searchInput, setSearchInput] = useState(""); // متن داخل input
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const columns = [
    { id: "id", title: "آیدی" },
    { id: "product", title: "محصول" },
    { id: "inventory", title: "موجودی" },
    { id: "color", title: "رنگ" },
    { id: "price", title: "قیمت" },
    { id: "rating", title: "امتیاز" },
    { id: "action", title: "اکشن" },
  ];

  const filteredData = (() => {
    const term = searchInput.trim().toLowerCase();
    if (!term) return products;
    return products.filter((p) => p.product.toLowerCase().includes(term));
  })();

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // توابع صفحه‌بندی
  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
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
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setSubmittedTerm(searchInput); // اعمال جستجو
                    setCurrentPage(1); // برگشت به صفحه ۱
                  }
                }}
              />
            </label>

            <h3 className="font-MorabbaMedium">
              تعداد محصولات : {products.length}
            </h3>
          </div>
          <DynamicTable
            columns={columns}
            data={currentItems}
            setProducts={setProducts}
            onDelete={deleteProduct}
          />

          {/* کنترل‌های Pagination */}
          <div className="flex justify-center mt-4 space-x-2 pb-5">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white cursor-pointer"}`}
            >
              قبلی
            </button>

            {generatePageButtons()}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white cursor-pointer"}`}
            >
              بعدی
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
