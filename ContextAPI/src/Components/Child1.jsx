import React from 'react'
import Nati from './Nati';
import { useContext } from 'react';
import { CounterContext } from '../App';

const Child1 = () => {

  const {count, setCount} = useContext(CounterContext)

  return (
    <div>
        <p>This is child1 {count}</p>
        <button onClick={()=>{setCount(count + 10)}}>increment10</button>
        <Nati />
    </div>
  )
}

export default Child1;