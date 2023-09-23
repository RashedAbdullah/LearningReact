import React from 'react';
import './Props2.css';

const FamilyData = (value, key) => {
  return (

    <div className='myFamily bg-primary-subtle m-5 rounded'>
        
        <div className='FamilyDetails m-5'>
            <p><span>Name:</span> {value.Member}</p>
            <p>He/She is my: {value.Relation}</p>
            <p>Born: {value.Dob}</p>
        </div>
        
    </div>
    
  )
}

export default FamilyData;