import React, {useState} from 'react';
import Nested from './NestedMapping/Nested';
import ClassComp from './classComponent/ClassComp';
import IconsofReact from './React-icons/Icons';
import Bootstrap from './Bootstrap/Bootstrap';
import State from './States/state';
import MainPage from './ConditionalRendering/index';
import EventHandle from './EventHandling/EventHandle';
import Form from './Form/Form';
import Parent from './ChildToParentData/Parent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FamilyPrint from './Props2/FamilyPrint';
import SurahNames from './quranJSX/surahNames/index';
import Surah1 from './quranJSX/allAyats/surah1';
import Navigator from './Navigator/Navigator';


const App = () => {

  

  return (
  <Router>
    <Navigator/>
        <Form/>
    <Routes>
      <Route path="/" element={<FamilyPrint/>}/>
      <Route path="/SurahNames" element={<SurahNames />}/>
      <Route path="/Surah1" element={<Surah1 />} />
    </Routes>
  </Router>
    
  )
}

export default App;