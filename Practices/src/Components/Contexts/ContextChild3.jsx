import React from 'react'
import { useContext } from 'react';
import { objContext } from './Context';

const ContextChild3 = () => {
    const {obj, setObj} = useContext(objContext);


  return (
    <div>

        Profession: {obj.profession}
    </div>
  )
}

export default ContextChild3;