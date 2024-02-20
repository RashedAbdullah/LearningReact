import React from 'react'
import { useContext } from 'react';
import { objContext } from './Context';
import ContextChild3 from './ContextChild3';

const ContextChild1 = () => {

    const {obj, setObj} = useContext(objContext);


  return (
    <div>
        Name: {obj.name}
        <ContextChild3/>
    </div>
  )
}

export default ContextChild1;