import ProductDetails from "./components/productDetails";
import ProductList from "./components/productList";

const App = () => {
  return (
    <div className="flex gap-5">
      <ProductList />
      <ProductDetails />
    </div>
  );
};

export default App;
