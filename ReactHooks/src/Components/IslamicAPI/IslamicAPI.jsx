import React, { useEffect, useState } from 'react'
import Country from './../Country/Country';
import './Islamic.css'

const IslamicAPI = () => {

    const [islamic, setIslamic] = useState([]);

    const URL = `https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/books/ar/ar/1/25/json`;
    // const URL = `https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/sitecontent/ar/ar/json`;
    useEffect(()=>{
        fetch(URL)
        .then(res => res.json())
        .then(res => setIslamic(res.data));
    },[]);

   

  return (
    <div className='islamicBook'>
            {
                 islamic.map(book=>{
                    console.log(book)
                    console.log(book.attachments[0].url)
                    return <div key={book.id}>
                        <p>{book.title}</p>
                        <a target='blank' href={book.attachments[0].url}>اقرء الكتاب</a>
                    </div>
                })
            }
    </div>
  )
}

export default IslamicAPI;