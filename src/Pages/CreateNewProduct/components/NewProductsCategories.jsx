import React, { useMemo, useState } from "react";
import Categories from "../../../Data/Categories";
import { RiCheckLine } from "react-icons/ri";

function NewProductsCategories() {
  const [selected, setSelected] = useState({});

  const toggle = (id) => setSelected((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <>
      <div className="space-y-2 h-fit bg-white w-md p-5 rounded-lg grid grid-cols-2 gap-2">
        {Categories.map((item) => {
          const id = item.id ?? item.title;
          const isChecked = !!selected[id];

          return (
            <label
              key={id}
              htmlFor={id}
              className="h-10 flex items-center gap-3 cursor-pointer select-none rounded-lg border border-gray-200 px-3 py-2 hover:border-blue-300 hover:bg-blue-50/30 transition"
            >
              <input
                id={id}
                type="checkbox"
                checked={isChecked}
                onChange={() => toggle(id)}
                className="sr-only"
              />

              <span
                className={[
                  "relative w-5 h-5 rounded-md flex items-center justify-center border transition",
                  isChecked
                    ? "bg-blue-600 border-blue-600"
                    : "bg-white border-gray-300 group-hover:border-blue-300",
                ].join(" ")}
              >
                <RiCheckLine
                  className={[
                    "w-3.5 h-3.5 transition-opacity text-white",
                    isChecked ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                />
              </span>

              <span className="text-sm text-gray-800">{item.title}</span>
            </label>
          );
        })}
      </div>
    </>
  );
}

export default NewProductsCategories;
