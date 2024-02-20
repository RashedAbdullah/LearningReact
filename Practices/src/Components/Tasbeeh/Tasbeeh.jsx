import React, { useState } from 'react'

const Tasbeeh = () => {
    const [increment, setIncrement] = useState(0);
    const [increment2, setIncrement2] = useState(0);
    const [increment3, setIncrement3] = useState(0);
    
    let totalCount = 0;
    totalCount += increment  + increment2 + increment3;
    
    const incrementbtn1 = ()=>{
        setIncrement(increment + 1)
    }
    const incrementbtn2 = ()=>{
        setIncrement2(increment2 + 1)
    }
    const incrementbtn3 = ()=>{
        setIncrement3(increment3 + 1)
    }

  return (
    <div>
        <h1>Total: {totalCount}</h1>
        <h2>{increment}</h2>
        <button onClick={incrementbtn1}>Subhanallah</button>
        <h2>{increment2}</h2>
        <button onClick={incrementbtn2}>Alhamdulillah</button>
        <h2>{increment3}</h2>
        <button onClick={incrementbtn3}>Allahu Akbar</button>
    </div>
  )
}

export default Tasbeeh;