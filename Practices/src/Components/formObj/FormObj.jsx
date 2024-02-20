import React from 'react'
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useRef } from 'react';

const FormObj = () => {

    const [allInputs, setAllInputs] = useState([]);
    const [inputValue, setInputValue] = useState({
        name: "",
        password: "",
        email: "",
    });

    const formChangesValues = (e)=>{
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        })
    }


    const handleform =(e)=>{
        e.preventDefault();

       if(inputValue.name.trim() === "" || inputValue.password.trim() === "" || inputValue.email.trim() === ""){
        return;
       } else {
        setAllInputs([
            ...allInputs,
            inputValue,
        ]);
       }

    }

  return (
    <div>
        <form action="" onSubmit={handleform}>
            <label htmlFor="">Name: </label>
            <input onChange={formChangesValues} name='name' type="text" value={inputValue.name} /><br />

            <label htmlFor="">Password: </label>
            <input onChange={formChangesValues} name='password' type="password" value={inputValue.password}/><br />

            <label htmlFor="">Gmail: </label>
            <input onChange={formChangesValues} name='email' type="email" value={inputValue.email}/><br /><br />

            <Button type="submit" size='small' variant="contained">Submit</Button>
        </form>

        {
            allInputs.map((value, index)=>(
                <div key={index}>
                    <p>Name: {value.name}</p>
                    <p>Password: {value.password}</p>
                    <p>Email: {value.email}</p>
                </div>
            ))
        }
    </div>
  )
}

export default FormObj