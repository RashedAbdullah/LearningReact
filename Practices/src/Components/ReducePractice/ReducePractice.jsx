import React from 'react'
import { useReducer } from 'react';
import { reducerFunc } from './ReducerFunc';

const ReducePractice = () => {

  const initialState = {
    name: "Rashed Abdullah"
  }
  const [state, dispatch] = useReducer(reducerFunc, initialState);
  const [state2, dispatch2] = useReducer(reducerFunc, initialState);
  console.log(state)
  return (
    <div>
      <div>
        <h2>{state.name}</h2>
        <button onClick={()=>dispatch({type: "labib", payload: "Labib irfan"})}>Labib</button>
        <button onClick={()=>dispatch({type: "mahmud", payload: "Mahmud"})}>mahmud</button>
        <button onClick={()=>dispatch({type: "hamid", payload: "Hamid"})}>hamid</button>
        <button onClick={()=>dispatch({type: "itisam", payload: "Itisam"})}>itisam</button>
        <button onClick={()=>dispatch({type: "yousuf", payload: "Yousuf"})}>yousuf</button>
      </div>

      <div>
        <h2>{state2.name}</h2>
        <button onClick={()=>dispatch2({type: "labib", payload: "Labib bin irfan"})}>Labib</button>
        <button onClick={()=>dispatch2({type: "mahmud", payload: "Mahmud bin taleb"})}>mahmud</button>
        <button onClick={()=>dispatch2({type: "hamid", payload: "Hamid bin mahmud"})}>hamid</button>
        <button onClick={()=>dispatch2({type: "itisam", payload: "Itisam bin idris"})}>itisam</button>
        <button onClick={()=>dispatch2({type: "yousuf", payload: "Yousuf bin yaqub"})}>yousuf</button>
      </div>
    </div>
  )
}

export default ReducePractice;