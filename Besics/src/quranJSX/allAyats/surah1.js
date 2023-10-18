import React from 'react';
import './surah1.css';
import Allsurah from '../../quranJSON/Ayats/quran.json';

const Surah1 = (value) => {
  return (

    //surah fatiha
    <div dir='rtl' className='surah1MainDiv'>

          <div className='surahNameAndBismillah'>
            <h2 className='text-center pb-2'>سورة الفاتحة</h2>
            <h2 className='text-center'>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</h2>
          </div>
          
          {Allsurah.Surah1.map((value)=> {

          // convert to number:
          let surahNumbers = parseInt(value.verse, 10);
          // English to Arabic:
          const numbers = `۰۱۲۳۴۵۶۷۸۹`;
          const convert = (surahNumbers) => {
          let res = "";
          const str = surahNumbers.toString();
          for (let c of str) {
            res += numbers.charAt(c);
            }
              return res;
            };
          const converted = convert(surahNumbers);


          return <div className='ayatAndNumber'>
                    <div className='ayat'>{value.text}</div>
                    <div className='ayatNo'><p>{converted}</p></div>
                </div>
          })}
        
    </div>
  )
}

export default Surah1;