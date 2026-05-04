import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import DynamicTable from "./DynamicTable";
import { usersData, culomns } from "../../Data/usersData";
import { RiSearch2Line } from "react-icons/ri";
import { useDebounce } from "../../Hooks/useDebounce";

function Users() {
  const [customers, setCustomers] = useState(usersData);
  const [col] = useState(culomns);
  const [searchInput, setSearchInput] = useState("");
  const debouncedValue = useDebounce(searchInput, 1000);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedValue]);

  // Filter
  const filteredData = (() => {
    const value = debouncedValue.trim().toLowerCase();
    if (!value) return customers;

    return customers.filter((customer) =>
      customer.name.toLowerCase().includes(value),
    );
  })();

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
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
            />
          </label>

          <h3 className="font-MorabbaMedium">
            تعداد مشتریان : {customers.length}
          </h3>
        </div>

        <DynamicTable
          col={col}
          customers={currentItems}
          onDlete={deleteCustomer}
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

          <span className="bg-gray-200 w-10 h-10 flex justify-center items-center rounded-sm text-lg">
            {currentPage}
          </span>

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
  );
}

export default Users;
