import { useState } from 'react';
import React from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div className="card">
                <button onClick={()=>setCount((count)=>count + 1)}>Count: {count}</button>
            </div>
        </div>
    )
}

export default Counter;