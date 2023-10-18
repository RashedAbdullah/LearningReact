import React, { Component } from 'react';
import Home from '../ConditionalRendering/Home';


function ClickMe(){
    // console.log(`Hello World!`)
    return (
        console.log(<Home />)
    )
}
const OnChangeFunc = ()=>{
    const inputValues = document.querySelector(`.inputValues`);
    const valuePrint = document.querySelector(`.valuePrint`);

    valuePrint.innerHTML = inputValues.value;
}



class EventHandle extends Component {

    

  render() {


    return (
      <div>
        <h2>EventHandle</h2>
        <button onClick={ClickMe}>Click me</button><br />
        <input className='inputValues' type="text" onChange={OnChangeFunc}/>
        <p className='valuePrint'></p>
      </div>
    )

  }
}
export default EventHandle;