import React from 'react';
import SurahNames from '../quranJSX/surahNames';
import Surah1 from '../quranJSX/allAyats/surah1';
import FamilyPrint from '../Props2/FamilyPrint';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-bootstrap';
import './Navigator.css';

const Navigator = () => {
  return (
    <div>

      <ul className='navigationUL'>
        <li><Link to="/" className='navs'>Home</Link></li>
        <li><Link to="/Surahnames" className='navs'>All Surah</Link></li>
        <li><Link to="/Surah1" className='navs'>Surah Fatiha</Link></li>
      </ul>

    </div>
  )
}

export default Navigator;