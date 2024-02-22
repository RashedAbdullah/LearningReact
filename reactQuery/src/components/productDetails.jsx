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
  const { data: productDetails } = useQuery({
    queryKey: ["products", id],
    queryFn: productData,
  });
  return <div>ProductDetails</div>;
};

export default ProductDetails;
