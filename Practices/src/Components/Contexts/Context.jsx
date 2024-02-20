import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';
import ContextChild1 from './ContextChild1';

export const objContext = createContext();
const Context = () => {
    const initialState = {
        name: "Rashed Abdullah",
        profession: "Web developer"
    }
    const [obj, setObj] = useState(initialState);

  return (
    <div>
        <objContext.Provider value={{obj, setObj}}>
            <ContextChild1 />
        </objContext.Provider>
        
    </div>
  )
}

export default Context;