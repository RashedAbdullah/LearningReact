import React from 'react'
import { useState } from 'react';

const Tasbeehcount = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    const increment3 = ()=>{
        setCount3(count3 + 1);
        if(count3 === 33){
            alert("You completed the Subhanallah alhamdulillah and allahu akbar");
            setCount3(0)
        }
    }

  return (
    <div>

            {
                (count >= 0 && count < 34) ?
                <div><p>{count}</p>
                <button onClick={()=>setCount(count + 1)}>Subhanallah</button></div>
                :
                (count2 >= 0 && count2 < 34) ?
                <div><p>{count2}</p>
                <button onClick={()=>setCount2(count2 + 1)}>Alhamdulillah</button></div>
                :
                <div>
                <p>{count3}</p>
                <button onClick={increment3}>Allahu Akbar</button>
                </div>
            }
            

    </div>
  )
}

export default Tasbeehcount;