import React, { useState } from "react";
import NewProductsCategories from "./components/NewProductsCategories";
import Information from "./components/Information";
import productsData from "../../Data/productsData";

function CreateNewProduct() {
  const [products, setProducts] = useState(productsData);

  // This function will be passed down to Information
  const handleAddProduct = (productToAdd) => {
    setProducts((prevProducts) => [...prevProducts, productToAdd]);
    console.log("Product added to state:", productToAdd);
    console.log("Current products list:", [...products, productToAdd]);
  };

  return (
    <div className="p-10">
      <h2 className="font-MorabbaMedium mb-5">اضافه کردن محصول</h2>

      <div className="flex gap-7">
        <NewProductsCategories />
        {/* Pass the handleAddProduct function as onAddProduct prop */}
        <Information onAddProduct={handleAddProduct} />
      </div>
    </div>
  );
}

export default CreateNewProduct;
