/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const productData = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:3000/${queryKey[0]}/${queryKey[1]}`
  );
  return response.data;
};

const ProductDetails = ({ id }) => {
  // eslint-disable-next-line no-unused-vars
  const {
    data: productDetails,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: productData,
  });

  if (isLoading) return <h2>Loading prducts details...</h2>;
  if (error) return <h2>An error occured: {error.message}</h2>;

  return (
    <div className=" ">
      <div className="fixed right-0 m-8 w-1/5 ">
        {" "}
        <h2 className="text-3xl my-3 text-center">Product Details</h2>
        {id ? (
          <div className="border bg-gray-100 rounded text-lg p-4">
            <img
              src={productDetails.thumbnail}
              alt={productDetails.title}
              className="rounded-full"
            />
            <h3 className="text-center font-semibold text-xl">
              {productDetails.title}
            </h3>
            <p>{productDetails.description}</p>
            <p>Price: ${productDetails.price}</p>
            <p>Rating: {productDetails.rating}/5 ⭐</p>
          </div>
        ) : (
          <div>
            <hr />
            <h2 className="text-2xl text-center text-gray-400 py-10">
              No Product Selected
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
