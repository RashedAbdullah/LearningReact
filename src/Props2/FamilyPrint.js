import React from 'react';
import './Props2.css';
import { Link } from 'react-router-dom';




const FamilyData = (value, key) => {
  return (

    <div className='myFamily bg-primary-subtle m-5 rounded'>
        
        <div className='FamilyDetails m-5'>
            <p><span>Name:</span> {value.Member}</p>
            <p>He/She is my: {value.Relation}</p>
            <p>Born: {value.Dob}</p>
            <li><Link to="/Surah1" className='navs'>Surah Fatiha</Link></li>
        </div>
        
    </div>
    
  )
}

export default FamilyData;