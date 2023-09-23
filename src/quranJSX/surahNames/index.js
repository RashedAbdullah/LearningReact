import React from 'react';
import './index.css';

const SurahNames = (value) => {
  return (
    <div className='SurahNamesMainDiv'>
        
            <a className='SurahNamesSecondDiv' href="">
            <div className='surahNumber'>
                <div className="insideofSurahNumber bg-success">
                <p>{value.id}</p>
                </div>
            </div>
            <div className='surahName'>
                <p>سورة {value.name}</p>
            </div>
            </a>
        
    </div>
  )
}

export default SurahNames;