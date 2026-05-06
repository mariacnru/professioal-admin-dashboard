import React, { useState } from "react";
import productsData from "../../../Data/productsData";

function LastProducts() {
  const [products, setProducts] = useState(productsData.slice(-5));
  return (
    <table>
      <thead>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </thead>
    </table>
  );
}

export default LastProducts;
