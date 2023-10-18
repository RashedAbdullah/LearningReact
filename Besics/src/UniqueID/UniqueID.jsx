import React from 'react';

// npm install uuid
import { v4 as uuidv4 } from 'uuid';
console.log(uuidv4())

const List = [
    {
        name: `Rashed Abdullah`,
        father: `Mawlana Abdullah`
    },
    {
        name: `Labib irfan`,
        father: `Abdul Halim irfan`
    },
    {
        name: `Ismat maymuna`,
        father: `Abdur Rahman Noman`
    },
    {
        name: `Salman Ahmad`,
        father: `Sultan Ahmad`
    }
]




const UniqueID = () => {
    return (
        <div>
       {List.map((ListOfitems)=>{

            // Destrucuring:
            const {id, name, father} = ListOfitems;

        return <div key={id}>
            
            <h2>{name}</h2>
            <h2>{father}</h2>
        </div>
        
       })}
    </div>
  )
}

export default UniqueID;