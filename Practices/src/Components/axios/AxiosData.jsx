import { useEffect, useState } from "react";
import axios from "axios";

const AxiosData = () => {
  // const [data, setData] = useState();
  // useEffect(()=> {
  //     axios.get("https://jsonplaceholder.typicode.com/users")
  //     .then((res)=> setData(res.data))
  //     .catch((err)=>console.log(err.message));
  // },[]);

  // const datafetch = async ()=>{
  //   const result = await axios.get("https://jsonplaceholder.typicode.com/users");
  //   setData(result);
  // }
  // useEffect(()=>{
  //   datafetch();
  // },[])
  // console.log(data?.data.map((value)=>{
  //   console.log(value.name)
  // }));

  const [data, setData] = useState({
    fistName: "",
    lastName: "",
  });
  const handleValue = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", data)
      .then((res) => console.log(res));
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleForm} action="">
        <div>Data post in server</div>
        <label htmlFor="FirsName">
          firstName:{" "}
          <input
            onChange={handleValue}
            value={data.fistName}
            name="fistName"
            type="text"
          />
        </label>
        <label htmlFor="LastName">
          {" "}
          lastName:{" "}
          <input
            onChange={handleValue}
            value={data.lastName}
            name="lastName"
            type="text"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AxiosData;
