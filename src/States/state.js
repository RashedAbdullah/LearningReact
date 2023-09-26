import React, {useState} from 'react';
import './state.css';

const State = () => {

    // it's array destructuring:
    const [count, setCount] = useState(1);

    function increment(){
        setCount(count + 1)
    }

    function decrement(){
        setCount(count - 1)
    }

  return (
    <div>
        <p className='incrementValue'>{count}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default State;