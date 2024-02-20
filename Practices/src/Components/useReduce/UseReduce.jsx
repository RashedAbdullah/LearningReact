import React, { useReducer } from 'react'

const reducer = (state, action) =>{

    // if(action.type === "increment"){
    //     return  {counter: state.counter + action.payload}
    // } else if(action.type === "dicrement"){
    //     return {counter: state.counter - action.payload};
    // }
    console.log(state)
    const {type, payload} = action;
    switch(type){
        case "increment":
            return {...state, counter: state.counter + payload}

        case "dicrement":
            return {...state,  counter: state.counter - payload}

        case "increment2":
            return {...state, counter2: state.counter2 + payload}

        case "dicrement2":
            return {...state, counter2: state.counter2 - payload}

        case "increment3":
            return {...state, counter3: state.counter3 + payload}

        case "dicrement3":
            return {...state, counter3: state.counter3 - payload}

        case "reset":
            return { counter: 0, counter2: 0, counter3: 0}

        default:
            return {counter: state, counter2: state, counter3: 0}
    }
}

const UseReduce = () => {
    
    // const initialState = {
    //     counter: 0
    // };


        // dispatch: প্রেরণ       initial state: প্রাথমিক অবস্থা।
    const [newState, dispatch] = useReducer(/*a function:*/ reducer,   /*initial value:*/ {counter: 0, counter2: 0, counter3: 0});

  return (

    <div>
        <p>{newState.counter} | {newState.counter2} | {newState.counter3}</p>

        <button onClick={()=>dispatch({type: "increment", payload: 1})}>incremenet</button>
        <button onClick={()=>dispatch({type: "dicrement", payload: 1})}>Decrement</button><br />

        <button onClick={()=>dispatch({type: "increment2", payload: 2})}>incremenet2</button>
        <button onClick={()=>dispatch({type: "dicrement2", payload: 1})}>Decrement2</button><br />

        <button onClick={()=>dispatch({type: "increment3", payload: 5})}>incremenet3</button>
        <button onClick={()=>dispatch({type: "dicrement3", payload: 1})}>Decrement3</button><br />

        <button onClick={()=>dispatch({type: "reset", payload: 0})}>Reset</button>
    </div>

  )
}

export default UseReduce;