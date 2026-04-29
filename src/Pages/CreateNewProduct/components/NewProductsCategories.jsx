import React, { useState } from "react"; // وارد کردن React و useState
import Categories from "../../../Data/Categories"; // وارد کردن داده‌های دسته‌بندی‌ها

function NewProductsCategories() {
  const [selected, setSelected] = useState({});

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target; // دریافت مقدار (عنوان دسته‌بندی) و وضعیت (true/false)

    // به‌روزرسانی state 'selected'
    setSelected((prevSelected) => {
      // ایجاد یک کپی از state قبلی برای جلوگیری از تغییر مستقیم
      const newState = { ...prevSelected };

      if (checked) {
        // اگر چک‌باکس انتخاب شده، عنوان دسته‌بندی را به state اضافه می‌کنیم
        newState[value] = true;
      } else {
        // اگر از حالت انتخاب خارج شد، عنوان دسته‌بندی را از state حذف می‌کنیم
        delete newState[value];
      }
      return newState; // برگرداندن state جدید
    });

    console.log(selected);
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
            checked={!!selected[item.title]}
            onChange={handleCheckboxChange}
            value={item.title}
            className="accent-blue-500"
          />
          {item.title}
        </label>
      ))}
    </div>
  );
}

export default NewProductsCategories;
