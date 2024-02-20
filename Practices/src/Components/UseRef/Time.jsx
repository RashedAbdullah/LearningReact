import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Time = () => {
    const [time, setTime] = useState(new Date());
    const [hideBtn, setHidebtn] = useState(false);

    const [unStopTime, setUnStopTime] = useState(new Date().toLocaleTimeString());
    useEffect(()=>{
      setInterval(() => {
        setUnStopTime(new Date().toLocaleTimeString())
      }, 1000);
    },[])

    const timeRef = useRef(null);

    useEffect(()=>{
        timeRef.current = setInterval(() => {
            setTime(new Date())
        }, 1000);
        return ()=>{ // Need more knowledge about return in useEffect.
            clearInterval(timeRef.current);
        }
    },[])
    
    const stopBtn = ()=>{
        clearInterval(timeRef.current)
        setHidebtn(true);
    };

    const startBtn = ()=>{
        timeRef.current = setInterval(() => {
            setTime(new Date())
        }, 1000);
        setHidebtn(false);
    }


  return (
    <div>
        <p>{unStopTime}</p>
        <p>{time.toLocaleTimeString("bn")}</p>
        {hideBtn ? <button onClick={startBtn}>Start</button> : <button onClick={stopBtn}>Stop</button>}
    </div>
  )
}

export default Time;