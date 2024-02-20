import React, { useState } from 'react'
import MemoRender from './MemoRender';

const Memo = () => {

  const [count, setCount] = useState(0);
  const [arr, setArr] = useState(["Rashed Abdullah", "Labib irfan", "Ismat maymuna"])

  return (
    <div>
      <MemoRender arr={arr} />
      <p>{count}</p>
      <button onClick={()=>setCount((prev)=>prev + 1)}>Increment</button>
    </div>
  )
}

export default Memo;