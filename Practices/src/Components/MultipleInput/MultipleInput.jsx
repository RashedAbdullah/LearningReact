// Catch multiple input in one objetc:

import React from 'react'
import { useState } from 'react';

const MultipleInput = () => {

    const [fulldata, setFulldata] = useState([]);

    const [details, setDetails] = useState({
        name: "",
        gmail: "",
        password: "",
        address: ""
    })

    const handleChanges = (e)=>{
        const {name, value} = e.target;

        setDetails((prev)=>{
            return { ...prev, [name]: value} //Need more knowledge about this.
        });
    }

    // const keys = [];
    // const values = [];
    // for(let key in details){
    // keys.push(key);
    // values.push(details[key]);
    // }
    
    
    const handleformSubmit = (e)=>{
        e.preventDefault();
        setFulldata([...fulldata, details]);
        localStorage.setItem("PersonData", JSON.stringify(fulldata));
    }
    

    document.cookie = "name=labibirfan";

    
  return (
    <div>
        <form onSubmit={handleformSubmit}>
            <label>Name: </label><input name="name" onChange={handleChanges}  type="text" /><br />
            <label>Gmail: </label><input name="gmail" onChange={handleChanges} type="email" /><br />
            <label>password: </label><input name="password" onChange={handleChanges} type="password" /><br />
            <label>Address: </label><input name="address" onChange={handleChanges} type="text" /><br />
            
            <button>Submit</button>
        </form>

        {
            fulldata.map((value, index)=>(
                <div key={index}>
                    <p>Name: {value.name}</p>
                    <p>Email: {value.gmail}</p>
                    <p>Address: {value.address}</p>
                </div>
            ))
        }

    </div>
  )
}

export default MultipleInput;