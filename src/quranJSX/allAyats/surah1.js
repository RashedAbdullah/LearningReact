import React from 'react';
import './surah1.css';

const Surah1 = (value) => {
  return (
    <div dir='rtl' className='surah1MainDiv'>
        <div className="surah1SecondDiv">
            
            <div className="ayat">
                <p>{value.text}</p>
            </div>
            <div className="ayatNo">
                <p>{value.verse}</p>
            </div>

        </div>
    </div>
  )
}

export default Surah1;