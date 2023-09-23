import React from 'react';
import './FamilyCSS.css';

const FamilyJSX = (value) => {
  return (
    <div className='bg'>
        <p>Name: {value.Member}</p>
        <p>He/She is my: </p>
        <p>Dob: </p>
    </div>
  )
}

export default FamilyJSX;