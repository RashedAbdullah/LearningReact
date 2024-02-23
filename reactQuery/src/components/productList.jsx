/* eslint-disable react/prop-types */
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { TbListDetails } from "react-icons/tb";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { Box, Button } from "@mui/material";

const productData = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:3000/${queryKey[0]}?_page=${queryKey[1].currentPage}&_per_page=6`
  );
  return response.data;
};

const ProductList = ({ setId }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", { currentPage }],
    queryFn: productData,
    retry: false,
    refetchInterval: 1000,
  });

  const mutation = useMutation({
    mutationFn: (id) => axios.delete(`http://localhost:3000/products/${id}`),
    onSuccess: () => {
      QueryClient.invalidateQueries(["products", { currentPage }]);
    },
  });
  const handleDeleteItem = (id) => {
    mutation.mutate(id);
  };

  if (isLoading) return <div>Loading data...</div>;
  if (error) return <div>An error occured: {error.message}</div>;
  return (
    <div className="flex flex-col justify-center items-center w-3/6 p-3">
      <h2 className="text-3xl py-4">All Products</h2>
      <Box
        component="ul"
        className="flex flex-wrap justify-center items-center"
      >
        {products.data.map((phone) => (
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
            <div className="flex justify-between w-full">
              <Button
                onClick={() => handleDeleteItem(phone.id)}
                color="error"
                variant="outlined"
                className="flex items-center gap-1 align-middle justify-center  py-1 px-3 rounded text-sm"
              >
                <IoRemoveCircleOutline />
              </Button>
              <Button
                variant="contained"
                onClick={() => setId(phone.id)}
                className="flex items-center gap-1 align-middle justify-center text-white py-1 px-3 rounded text-sm"
              >
                See Details <TbListDetails />
              </Button>{" "}
            </div>
          </li>
        ))}
      </Box>
      <div className="flex align-middle items-center justify-center gap-5 w-full">
        {
          <>
            <Button
              disabled={!products.prev}
              onClick={() => setCurrentPage(products.prev)}
              className="flex items-center align-middle justify-center gap-1 py-1 px-6 rounded border"
            >
              <GrFormPrevious /> Prev
            </Button>

            <Button
              disabled={!products.next}
              onClick={() => setCurrentPage(products.next)}
              className="flex items-center align-middle justify-center gap-1 py-1 px-6 rounded border"
            >
              Next <MdNavigateNext />
            </Button>
          </>
        }
      </div>
    </div>
  );
};

export default ProductList;
