import { v4 as uuidv4 } from "uuid";

const CustomID = () => {
  const onj = [
    {
      id: uuidv4(),
      name: "Rashed",
    },
    {
      id: uuidv4(),
      name: "Labib",
    },
  ];
  console.log(onj)
};

export default CustomID;
