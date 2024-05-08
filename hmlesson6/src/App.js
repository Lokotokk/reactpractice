import React from "react";
import { AddProductForm } from "./features/AddProductForm";
import { ProductsList } from "./features/ProductsList";
import { EditProductForm } from "./features/EditProductForm";

function App() {
  return (
    <div>
      <h1>Product Catalog Management</h1>
      <AddProductForm />
      <ProductsList />
      <EditProductForm />
    </div>
  );
}

export default App;
