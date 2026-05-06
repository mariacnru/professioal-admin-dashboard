import React, { useState } from "react";
import productsData from "../../../Data/productsData";

function LastProducts() {
  const [products, setProducts] = useState(productsData.slice(-5));
  return (
    <table className="w-full text-sm">
      <thead className="bg-green-100">
        <tr className="*:p-3 *:text-gray-500 *:text-sm">
          <td>آیدی</td>
          <td>محصول</td>
          <td>رنگ</td>
          <td>قیمت</td>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200 *:even:bg-gray-50">
        {products.map((item) => (
          <tr key={item.id} className="*:p-4">
            <td>{item.id}</td>
            <td className="font-MorabbaMedium">{item.product}</td>
            <td>{item.color}</td>
            <td
              className={`${item.price > 1000000 ? "text-red-500" : "text-green-500"}`}
            >
              {item.price}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LastProducts;
