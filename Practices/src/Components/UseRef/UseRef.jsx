
import { useEffect } from 'react';
import { useRef } from 'react';
import SndUseRef from './ForwardRef';

const UseRef = () => {

    // const p = useRef(null);
    const inputRef = useRef(null);
    
    useEffect(()=>{
        // p.current.innerText = `Rashed Abdullah`
        inputRef.current.focus();
    },[])

  return (
    <div>
        {/* <p ref={p}>Hello world!</p> */}
        {/* <input type="text" ref={inputRef} placeholder='Input your name'/> */}

        <SndUseRef ref={inputRef} type="text" placeholder="Input your name" />
    </div>
  )
}

export default UseRef;