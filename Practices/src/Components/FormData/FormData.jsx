import React, { useEffect, useState } from 'react'
import { storageData } from './StorageData';

const FormData = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState(0);
    const [password, setPassword] = useState(0);

    const [fullData, setFullData] = useState(storageData());


    useEffect(()=>{
        localStorage.setItem("PersonInfo", JSON.stringify(fullData));
    },[fullData]);

    const clearInput = ()=>{
        setName("");
        setAddress("");
        setPhone("");
        setPassword("");
    }

    const handleForm = (e)=>{
        e.preventDefault();
        const allData = {
            name,
            address,
            phone,
            password
        }
        setFullData([...fullData, allData]);
        clearInput();
    }
  return (
    <div>
        <form action="" onSubmit={handleForm}>
            <span>Name: </span><input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder='Input your name'/><br />
            <span>Address: </span><input onChange={(e)=>setAddress(e.target.value)} value={address} type="text" /><br />
            <span>Phone: </span><input onChange={(e)=>setPhone(e.target.value)} value={phone} type="number" /><br />
            <span>Password: </span><input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" /><br />
            <input type="submit" />
        </form>
        <button onClick={()=>setFullData([])}>Clear Data</button>
        <div>
            {
                fullData.map((item, index)=>(
                    <div key={index}>
                        <p>Name: {item.name}</p>
                        <p>Address: {item.address}</p>
                        <p>Phone: {item.phone}</p>
                        <p>Password: {item.password}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FormData;