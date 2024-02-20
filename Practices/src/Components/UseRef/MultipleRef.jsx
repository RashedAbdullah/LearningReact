import React, { useRef } from 'react';
import './Ref.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const multipleRef = () => {

  const attrRef = useRef(null);
  const classNameChnage = useRef(null);

  const handleImg = ()=>{
    attrRef.current.src = "https://placehold.co/400";
    classNameChnage.current.className = 'red';
  }


  // Multiple useRef: (it's successfully working);
  let changeinnerText, changeClssName, setHieghtWidth = useRef(null);
  const handleMultipleData = ()=>{
    changeinnerText.innerText = "Successfully changed innerText";
    changeClssName.className = 'red';
    setHieghtWidth.setAttribute("height", "100px");
  }

  const addAndRemoveCLassName = useRef(null);

  const changeClassList= ()=>{
    addAndRemoveCLassName.current.classList.toggle('red');
    addAndRemoveCLassName.current.classList.toggle('bg-red');
  }

  const incrementNum = useRef(0);

  const increment = ()=>{
    incrementNum.current++;
    console.log(incrementNum.current)
  }



  return (
    <div>
      <p ref={classNameChnage}>This is white color</p>
      <img ref={attrRef} src="https://placehold.co/600x400" alt="" /><br />
      <button onClick={handleImg}>change attr</button> <br />


      <p ref={text=>changeinnerText=text}>Change innerHTML/innerText</p>
      <p ref={(clsName)=>changeClssName=clsName}>Change className</p>
      <img ref={(height)=>setHieghtWidth=height} src="https://placehold.co/400" alt="" />
      <br /> <button onClick={handleMultipleData}>multipeData</button>

      <h2 ref={addAndRemoveCLassName} className='red'>this is red</h2>
      <button style={{cursor: "pointer"}} onClick={changeClassList}>add or remove class name</button>


      <button onClick={increment}>increment with useRef</button>
    </div>
  )
}

export default multipleRef;