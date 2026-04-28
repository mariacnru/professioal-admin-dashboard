import React, { useRef, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import { RiAddLine, RiUpload2Line } from "react-icons/ri";
import DeletCategorieCard from "./components/DeletCategorieCard";
import data from "../../Data/Categories";

function Categories() {
  const [CategoriesData, setCategoriesData] = useState(data);
  const [catTitle, setCatTitle] = useState("");
  const [itemCount, setItemCount] = useState("");
  const targetSectionRef = useRef(null);

  const handleScroll = () => {
    targetSectionRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const deleteHandler = (id) => {
    console.log(id);

    setCategoriesData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const addCategorie = () => {
    const newCat = {
      id: CategoriesData.length + 1,
      title: catTitle,
      itemCount: Number(itemCount),
    };

    setCategoriesData((prev) => [...prev, newCat]);
    setCatTitle("");
    setItemCount("");

    console.log(newCat);
  };

  return (
    <div className="m-10">
      <Header handleScroll={handleScroll} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {CategoriesData.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>

      <h3
        ref={targetSectionRef}
        className="font-MorabbaMedium text-center mt-15 text-2xl border-x-4 border-gray-900"
      >
        افزودن یا حذف دسته بندی
      </h3>

      <div className="mt-20 flex flex-wrap md:flex-nowrap gap-10 *:mx-auto">
        <div className="w-120">
          <div className="bg-white rounded-md p-5">
            <h4 className="font-MorabbaMedium mb-5">اطلاعات دسته بندی</h4>

            <span className="text-sm text-gray-500">اسم دسته بندی</span>
            <input
              value={catTitle}
              onChange={(e) => setCatTitle(e.target.value)}
              type="text"
              className="border border-gray-400 w-full p-1 rounded-md mb-2 focus:shadow-lg run xl outline-0 hover:border-gray-700 transition cursor-pointer"
            />

            <span className="text-sm text-gray-500">تعداد</span>
            <input
              value={itemCount}
              onChange={(e) => setItemCount(e.target.value)}
              type="text"
              className="border border-gray-400 w-full p-1 rounded-md mb-8 focus:shadow-lg run xl outline-0 hover:border-gray-700 transition cursor-pointer"
            />

            <span className="text-sm text-gray-500">عکس</span>
            <div className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-gray-300 rounded-md p-6 hover:border-gray-700 transition cursor-pointer">
              <label htmlFor="file" className="cursor-pointer">
                <div className="flex justify-center my-2">
                  <RiUpload2Line size={20} />
                </div>

                <p className="text-sm font-medium text-gray-400">
                  فایل مورد نظر رو انتخاب کن
                </p>
                <p className="text-sm text-gray-400 text-center">
                  فقط فایل تصویری
                </p>
              </label>

              <input type="file" name="" id="file" className="hidden" />

              <p className="text-center mt-5">
                فرمت : jpg , jpeg , png , gif , webp
              </p>
            </div>

            <button
              onClick={() => addCategorie()}
              className="bg-blue-500 flex items-center gap-2 mt-5 rounded-sm py-2 px-4 text-white text-sm hover:shadow-lg shadow-blue-200 transition cursor-pointer"
            >
              <RiAddLine /> افزودن دسته بندی
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full">
          {CategoriesData.map((item) => (
            <DeletCategorieCard
              key={item.id}
              {...item}
              deleteHandler={deleteHandler}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
