import React, { useEffect, useState } from 'react';
import './FetchData.css';

const FetchData = () => {
    const [manageData, setManageData] = useState([]);
    // const URL = `https://api.alquran.cloud/v1/edition`;
    const URL = `https://api.alquran.cloud/v1/quran/quran-uthmani`;
    useEffect(()=>{
        fetch(URL)
        .then(res=>res.json())
        .then(data=>setManageData(data.data.surahs))
    },[])
    console.log(manageData);
  return (
    <div dir='rtl' className='quran'>
       {
        manageData.map((value, index)=>(
            <div key={index}>
                <h2>{value.name}</h2>
                {
                    <div>
                        {
                            value.ayahs.map((ayat, ind)=>(
                                <p key={ind}>{ayat.text}   {ayat.numberInSurah}</p>
                            ))
                        }
                    </div>
                }
            </div>
        ))
       }
    </div>
  )
}

export default FetchData;