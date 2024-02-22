import { useState } from "react";
import ProductDetails from "./components/productDetails";
import ProductList from "./components/productList";
import AddProduct from "./components/addProduct";

const App = () => {
  const [id, setId] = useState("");
  return (
    <div className="flex gap-5 font-Roboto justify-center">
      <AddProduct />
      <ProductList setId={setId} />
      <ProductDetails id={id} />
    </div>
  );
};

export default App;
