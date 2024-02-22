/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { TbListDetails } from "react-icons/tb";

const productData = async ({ queryKey }) => {
  const response = await axios.get(`http://localhost:3000/${queryKey[0]}`);
  return response.data;
};

const ProductList = ({ setId }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: smartPhones,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: productData,
    retry: false,
    // refetchInterval: 1000,
    // staleTime: 2000,
  });

  if (isLoading) return <div>Loading data...</div>;
  if (error) return <div>An error occured: {error.message}</div>;
  return (
    <div className="flex flex-col justify-center items-center w-3/6 p-3">
      <h2 className="text-3xl py-4">Smart Phones</h2>
      <ul className="flex flex-wrap justify-center items-center">
        {smartPhones.map((phone) => (
          <li
            key={phone.id}
            className="flex flex-col items-center m-2 border rounded-sm p-3"
          >
            <img
              className=" object-cover h-62 w-60"
              src={phone.thumbnail}
              alt={phone.title}
            />
            <h3 className="font-bold text-2xl py-5">{phone.title}</h3>
            <button
              onClick={() => setId(phone.id)}
              className="flex items-center gap-1 align-middle justify-center bg-green-500 text-white py-1 px-3 rounded text-sm"
            >
              See Details <TbListDetails />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
