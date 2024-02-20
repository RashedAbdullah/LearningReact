import { useState } from 'react';
import './Counter.css';
import React from 'react'

const Counter = () => {

  const [count, setCount] = useState(0);

  const increment = ()=>{
    setCount(prevValue=> prevValue + 1);
    if(count === 50){
      console.log("congrats!")
    }
  }
  const decrement = ()=>{

    // if(count > 0){
    //   setCount(prevValue=> prevValue -1)
    // }

    //Short circuit:
    count > 0 && setCount(prevValue => prevValue - 1);
  }

  const reset = ()=>{
    console.log(count)
    setCount(0)
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter;