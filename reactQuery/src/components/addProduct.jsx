import { Box, Button, TextField } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const AddProduct = () => {
  const [states, setStates] = useState({
    id: "",
    title: "",
    description: "",
    price: 0,
    rating: 4.0,
    thumbnail: "",
  });

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (newProduct) =>
      axios.post(`http://localhost:3000/products`, newProduct),
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });
  const handleAddForm = (e) => {
    console.log(e);
    e.preventDefault();
    const statesWithId = { ...states, id: crypto.randomUUID().toString() };
    mutation.mutate(statesWithId);
  };
  const handleChangeState = (e) => {
    const names = e.target.name;

    const values =
      e.target.type === "number" ? e.target.valueAsNumber : e.target.value;
    setStates({
      ...states,
      [names]: values,
    });
  };

  if (mutation.isLoading) return <h2>Submitting data...</h2>;
  if (mutation.isError) return <h2>An error is occured {mutation.error}</h2>;
  return (
    <div className="mb-3 ml-5 p-4 w-1/4 h-1/2 fixed left-0 flex flex-col">
      <h2 className="text-3xl p-2 m-2 text-center">Add Product</h2>
      <Box
        component="form"
        onSubmit={handleAddForm}
        className="border p-3 rounded text-lg"
      >
        <div className="mt-5">
          <TextField
            variant="filled"
            label="Title"
            type="text"
            id="title"
            name="title"
            className="w-full"
            placeholder="Enter Title"
            value={states.title}
            onChange={handleChangeState}
          />
        </div>
        <div className="mt-5">
          <TextField
            variant="filled"
            label="Description"
            type="text"
            id="description"
            name="description"
            className="w-full"
            placeholder="Enter Description"
            value={states.description}
            onChange={handleChangeState}
          />
        </div>
        <div className="mt-5">
          <TextField
            variant="filled"
            label="Price"
            type="number"
            id="price"
            name="price"
            className=" outline-none border p-1 mb-3 w-full"
            placeholder="Enter Price"
            value={states.price}
            onChange={handleChangeState}
          />
        </div>
        <div className="mt-5">
          <TextField
            variant="filled"
            label="URL"
            type="text"
            id="thumbnail"
            name="thumbnail"
            className=" outline-none border p-1 mb-3 w-full"
            placeholder="Enter URL"
            value={states.thumbnail}
            onChange={handleChangeState}
          />
        </div>
        <div className="mt-5">
          <Button
            variant="contained"
            className="w-full"
            onClick={handleAddForm}
          >
            Add
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default AddProduct;
