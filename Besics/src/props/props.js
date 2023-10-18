import React from 'react'
import './props.css';

const props = (Stundets, key) => {
  return (
    
    <div className='mainProps'>
        <div className="singleProp bg-success text-light rounded">
            <div className='details'>
                <p className="name"><span>Name:</span> {Stundets.Name}</p>
                <p className="classNo"><span>Class:</span> {Stundets.ClassNo}</p>
                <p className="rollNo"><span>Roll:</span> {Stundets.RollNo}</p>
            </div>
        </div>
    </div>
    
  )
}

export default props;