// import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import HeroArea from './components/HeroArea';

import Props from './props/props';
import Data from './props/data.json';

import FamilyData from './Props2/FamilyPrint';
import FamilyJSONData from './Props2/FamilyProps.json';
// moreData:
import FamilyJSX from './moreData/FamilyJSX';
import FamilyJSON from './moreData/FamiyJSON.json';

// QuranDatas:
import SurahNames from './quranJSX/surahNames/index';
import SurahNameJSON from './quranJSON/surahNames/surahNameArUrEn.json';

// surah Data:

// surah1:
import Surah1 from './quranJSX/allAyats/surah1';
import Allsurah from './quranJSON/Ayats/quran.json';

const LearningReact = () => {

  let FamilyDatas = [];
  {FamilyDatas = FamilyJSONData.map((value) => { return <FamilyData Member = {value.Member} Relation = {value.Relation} Dob = {value.Dob}/>})}
  
  let items = [];
  {items = Data.map((value) => <Props Name={value.Name} ClassNo={value.ClassNo} RollNo = {value.RollNo}/>)}

  let MoreData = [];
  {MoreData = FamilyJSON.map((value)=><FamilyJSX Member={value.Member} Relation={value.Relation}/>)}

  return (
    <div className='Not'>
      <Header />
      <HeroArea />
      
      {/* Surah Names */}
      <div dir='rtl' className="HeadlineOfSurah">
        <h2 className='text-light m-5'>أسماء السور القرآنية</h2>
      <div className='surahNameOutsiteDiv'>
      {SurahNameJSON.map((value) => {

        // convert to number:
        let surahNumbers = parseInt(value.id, 10);
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
        return<SurahNames
      id={converted}
      name={value.name}
      />})}
      </div>
      </div>

        {/* surah fatiha */}
        <div className='surah1OutsiteDiv'>

          <div className='surahNameAndBismillah'>
          <h2 className='text-center'>سورة الفاتحة</h2> <hr />
          <h2 className='text-center'>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</h2>
          </div>
          {Allsurah.Surah1.map((value)=>{

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


          return <Surah1
          verse={converted}
          text={value.text}
          />})}
        </div>
      
      {/* Props items */}
      <div>
        <h2 className='text-center text-light mt-5'>all of JSON's file:</h2>
        <div className='propFlex'>
          {items}
        </div>
      </div>
      {/* Family props */}
      <div>
        <h2 className='text-center text-light'>My All Family Members:</h2>
      <div className='FamilyDataBox'>
        {FamilyDatas}
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default LearningReact;