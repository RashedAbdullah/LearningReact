import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const productData = async ({ queryKey }) => {
  console.log(queryKey[0]);
  const response = await axios.get(`http://localhost:3000/${queryKey[0]}`);
  return response.data;
};

const ProductList = () => {
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
    <div className="flex flex-col justify-center items-center w-3/5">
      <h2 className="text-3xl py-4 border-b border-black">Smart Phones</h2>
      <ul className="flex flex-wrap justify-center items-center">
        {smartPhones.map((phone) => (
          <li
            key={phone.id}
            className="flex flex-col items-center m-2 border rounded-sm"
          >
            <img
              className=" object-cover h-62 w-60"
              src={phone.thumbnail}
              alt={phone.title}
            />
            <h3 className="font-bold text-2xl py-5">{phone.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
