import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Country from './../Country/Country';
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);

    const URL = "https://restcountries.com/v3.1/all";
    useEffect(()=>{
        fetch(URL)
        .then(res => res.json())
        .then(data=>setCountries(data));
    },[]);
    // console.log(countries)
  return (
    <div>
        <div className='countries'>
        {
            countries.map((country, index)=>{
                return <Country key={index} country={country}/>
            })
        }
        </div>
    </div>
  )
}

export default Countries;