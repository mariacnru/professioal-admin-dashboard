import React, { useState } from "react";
import { usersData } from "../../../Data/usersData";

function LastUsers() {
  const [products, setProducts] = useState(usersData.slice(-5));
  return (
    <table className="w-full lg:w-100 text-sm">
      <thead className="bg-green-100">
        <tr className="*:p-3 *:text-gray-500 *:text-sm">
          <td>آیدی</td>
          <td>اسم</td>
          <td>لوکیشن</td>
          <td>سفارشات</td>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200 *:even:bg-gray-50">
        {products.map((item) => (
          <tr key={item.id} className="*:p-4">
            <td>{item.id}</td>
            <td className="font-MorabbaMedium">{item.name}</td>
            <td>{item.location}</td>
            <td>{item.orders}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LastUsers;
