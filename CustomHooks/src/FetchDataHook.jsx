import React, { useState } from 'react'
import { useFetch } from './Hooks/FetchData/useFetch';

const FetchDataHook = () => {
  
    const url1 = `https://jsonplaceholder.typicode.com/posts`;
    const url2 = `https://jsonplaceholder.typicode.com/comments`;
    const url3 = `https://jsonplaceholder.typicode.com/albums`;
    const url4 = `https://jsonplaceholder.typicode.com/todos`;
    const url5 = `https://jsonplaceholder.typicode.com/users`;
    const url6 = `https://jsonplaceholder.typicode.com/photos`;

    const {data, error} = useFetch(url1);
    const {data: data2, error: error2} = useFetch(url2);
    const {data: data3, error: error3} = useFetch(url3);
    const {data: data4, error: error4} = useFetch(url4);
    const {data: data5, error: error5} = useFetch(url5);
    const {data: data6, error: error6} = useFetch(url6);
    
  return (
    <div>
        <h2>Post Data:</h2>
        {error && <p>{error}</p>}
        {data && data.map((value, index)=>(
            <div key={index}>Title: {value.title}</div>
        ))}

        <h2>Comment Data:</h2>
        {error2 && <p>{error2}</p>}
        {
          data2 && data2.map(value=>(
            <div key={value.id}>Email: {value.email}</div>
          ))
        }

        <h2>Album data:</h2>
        {error3 && <p>{error3}</p>}
        {
          data3 && data3.map(value=>(
            <div key={value.id}>Title: {value.title}</div>
          ))
        }

        <h2>Todo data:</h2>
        {error4 && <p>{error4}</p>}
        {
          data4 && data4.map(value=>(
            <div key={value.id}>Title: {value.title}</div>
          ))
        }

        <h2>User data:</h2>
        {error5 && <p>{error5}</p>}
        {
          data5 && data5.map(value=>(
            <div key={value.id}>Name: {value.name}</div>
          ))
        }

        <h2>Photos data:</h2>
        {error6 && <p>{error6}</p>}
        {
          data6 && data6.map(value=>(
            <span key={value.id}><img src={value.url} alt="" /></span>
          ))
        }
        
        </div>
  )
}

export default FetchDataHook;