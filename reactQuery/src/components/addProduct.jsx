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
    <div className="mb-3 ml-5 p-4 w-1/4 h-1/2 fixed left-0">
      <h2 className="text-3xl p-2 m-2 text-center">Add A Product</h2>
      <form onSubmit={handleAddForm} className="border p-3 rounded text-lg">
        <div>
          <label htmlFor="title">
            Title:
            <input
              type="text"
              id="title"
              name="title"
              className=" outline-none border p-1 mb-3 w-full"
              placeholder="Enter Title"
              value={states.title}
              onChange={handleChangeState}
            />
          </label>
        </div>
        <div>
          <label htmlFor="description">
            Description:
            <textarea
              type="text"
              id="description"
              name="description"
              className=" outline-none border p-1 mb-3 w-full"
              placeholder="Enter Description"
              value={states.description}
              onChange={handleChangeState}
            />
          </label>
        </div>
        <div>
          <label htmlFor="price">
            Price:
            <input
              type="number"
              id="price"
              name="price"
              className=" outline-none border p-1 mb-3 w-full"
              placeholder="Enter Price"
              value={states.price}
              onChange={handleChangeState}
            />
          </label>
        </div>
        <div>
          <label htmlFor="thumbnail">
            URL:
            <input
              type="text"
              id="thumbnail"
              name="thumbnail"
              className=" outline-none border p-1 mb-3 w-full"
              placeholder="Enter URL"
              value={states.thumbnail}
              onChange={handleChangeState}
            />
          </label>
        </div>
        <div>
          <button className=" mt-5 text-green-500 border py-1 px-4 rounded bg-gray-100 w-full">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
