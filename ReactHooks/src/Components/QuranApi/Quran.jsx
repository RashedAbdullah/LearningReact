import React, { useEffect, useState } from 'react'

const Quran = () => {

    const [quranData, getQuranData] = useState([]);
    useEffect(()=>{

      const URL = `https://api.alquran.cloud/v1/surah/2`;
        // const URL = `https://quranenc.com/api/v1/translation/sura/english_saheeh/2`;
        // const URL = `https://quranenc.com/api/v1/translation/sura/${translation_key}/${sura_number}`;
        fetch(URL)
        .then(res => res.json())
        .then(data => getQuranData(data.data.ayahs));

    },[]);
    console.log(quranData)
  return (
    <div className='flex' dir='rtl'>
        {
          quranData.map(surah=>{
            return <div key={surah.numberInSurah}>
              {/* <h3>{surah.number}</h3> */}
              <p style={{textAlign: "right"}}>{surah.text}</p>
            </div>
          })
        }
    </div>
  )
}

export default Quran;