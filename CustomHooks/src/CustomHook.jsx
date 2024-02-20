import React from 'react'
import { useHooks } from './Hooks/useHook';

const CustomHook = () => {
  const {count, increment, decrement, reset} = useHooks();
  const {count: count2, increment: increment2, decrement: decrement2, reset: reset2} = useHooks();

  return (
    <div>
        <div>
          <p>{count}</p>
          <button onClick={increment}>increment</button>
          <button onClick={decrement}>decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
        <div>
        <p>{count2}</p>
        <button onClick={increment2}>increment</button>
        <button onClick={decrement2}>decrement</button>
        <button onClick={reset2}>Reset</button>
        </div>
    </div>
  )
}

export default CustomHook;