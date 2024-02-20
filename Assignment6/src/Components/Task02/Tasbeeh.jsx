import React, { useState } from 'react';
import './Tasbeeh.css';

const Tasbeeh = () => {
    const [count, setCount] = useState(0);

    const subhanallah = ()=>{
        count >= 0 && setCount(count + 1);
        count === 32 && alert(`You completed سبحان الله`);
    }
    const alhamdulillah = ()=>{
            if(count < 33){
                alert("Please complete سبحان الله")
            }
            count >= 33 && setCount(count + 1);
            count === 65 && alert(`You completed سبحان الله و الحمد لله`);
    }
    const allahuAkbar = ()=>{
        if(count < 66){
            alert("Please complete  سبحان الله")
        }
        count >= 66 && setCount(count + 1);
        count === 99 && alert(`You completed سبحان الله و الحمد لله و الله أكبر`);
    }
    const restbtn = ()=>{
        setCount(0)
    }

  return (
    <div dir='rtl' className='center'>
        <div className='counterUiDiv'><h2>{count}</h2></div>
       <div>
            <button className='tasbeehBtn' onClick={subhanallah}>سبحان الله</button>
            <button className='tasbeehBtn' onClick={alhamdulillah}>الحمد لله</button>
            <button className='tasbeehBtn' onClick={allahuAkbar}>الله أكبر</button>
       </div>
            <button className='tasbeehBtn resetBtn' onClick={restbtn}>Reset</button>
    </div>
  )
}

export default Tasbeeh;