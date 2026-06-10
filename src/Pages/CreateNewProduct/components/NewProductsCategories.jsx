import React, { useState } from "react";
import Categories from "../../../Data/Categories";

function NewProductsCategories() {
  const [selected, setSelected] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    setSelected((prev) => {
      if (checked) {
        return [...prev, value];
      } else {
        return prev.filter((item) => item !== value);
      }
    });
  };

  return (
    <div className="space-y-2 h-fit bg-white w-md p-5 rounded-lg grid grid-cols-2 gap-2">
      {Categories.map((item) => (
        <label
          key={item.id}
          className="h-10 flex items-center gap-3 text-sm cursor-pointer select-none rounded-lg border border-gray-200 px-3 py-2 hover:border-blue-300 hover:bg-blue-50/30 transition"
        >
          <input
            type="checkbox"
            value={item.title}
            checked={selected.includes(item.title)}
            onChange={handleCheckboxChange}
            className="accent-blue-500"
          />
          {item.title}
        </label>
      ))}
    </div>
  );
}

export default NewProductsCategories;
