import React, { useReducer } from 'react';

const reducer = (state, action)=>{
    console.log(state)
    switch(action.type){
        case "increment":
            return {...state, counter: state.counter + action.payload}
        case "increment":
            return {...state, counter: state.counter + action.payload}
    }
}

const Reduces = () => {

    const initialState = {
        counter: 0
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    const [state2, dispatch2] = useReducer(reducer, initialState);
    const [state3, dispatch3] = useReducer(reducer, initialState);
    const [state4, dispatch4] = useReducer(reducer, initialState);

  return (

    <div style={{textAlign: "center", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
       <div>
            <h2>counter1: {state.counter}. counter2: {state2.counter}</h2>
            <button onClick={()=>dispatch({type: "increment", payload: 1})}>increment1</button>
            <button onClick={()=>dispatch2({type: "increment", payload: 2})}>increment2</button> <br />

            <h2>counter3: {state3.counter}. counter4: {state4.counter}</h2>
            <button onClick={()=>dispatch3({type: "increment", payload: 1})}>increment3</button>
            <button onClick={()=>dispatch4({type: "increment", payload: 2})}>increment4</button> <br />
       </div>
    </div>
  )
}

export default Reduces;