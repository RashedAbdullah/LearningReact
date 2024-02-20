import React, { useContext } from 'react';
import { CounterContext } from './../App';

const Nati = () => {
    const {count, setCount} = useContext(CounterContext);
  return (
    <div style={{textAlign: "center"}}>
      <p>{count}</p>
      <button style={{height: "40px"}} onClick={()=>setCount(count + 1)}>increment</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default Nati;