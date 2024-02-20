import React, { useRef } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Hooks = () => {

    // Chenge attribute wit hooks:
    const srcAttr = useRef();
    const changeAttr = ()=>{
        srcAttr.current.src = "https://images.pexels.com/photos/15693519/pexels-photo-15693519/free-photo-of-jamea-rashidia-feni-bangladesh.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
        // we can style this:
        srcAttr.current.setAttribute("height", "300px")
    }

    // Chenge innerHTML/innderText with hooks:
    let refferance = useRef();
    let refferance2 = useRef();
    const refBtn = ()=>{
        refferance.current.innerHTML = `<ul><li>One</li><li>Two</li></ul>`
        refferance2.innerHTML = `<ul><li>current</li><li>current2</li></ul>`
    }

    let fname, lname = useRef();
    const inputBtn = ()=>{
        let value1 = fname.value;
        let value2 = lname.value;
        console.log(value1, value2);

        alert(`Welcome mister: ${value1} ${value2}`)
    }
    
  return (
    <div>
        <button className='bg-warning rounded' onClick={refBtn}>Show ref</button>
        <h3 ref={refferance}></h3>

        {/* Without 'current' */}
        <h3 ref={crnt=>refferance2=crnt}></h3>


        {/* Chenge attr */}
        <button onClick={changeAttr}>Change attr</button>
        <img ref={srcAttr} src="https://images.pexels.com/photos/15693393/pexels-photo-15693393/free-photo-of-al-jamia-al-islamia-patiya.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />


        {/* input useref(): */}
        <br /><br />
        <input ref={o => fname = o} type="text" placeholder='first name'/>
        <input ref={o => lname = o} type="text" placeholder='last name'/> <br /><br />
        <button onClick={inputBtn}>inpt value</button>

    </div>
  )
}

export default Hooks;