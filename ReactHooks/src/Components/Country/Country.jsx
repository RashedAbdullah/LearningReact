import React from 'react';
import './Country.css';

const Country = (props) => {

  const langs = props.country.languages;
  const arr = [];
  for(let key in langs){
    arr.push(langs[key])
  }
  return (
    <div className='insideCountry'>
      <div className='flagdiv'><img className='flagimg' src={props.country.flags.png} alt={props.country.flags.alt} /></div>
      <h3>Name: {props.country.name.common}</h3>
      <p>Capital: {props.country.capital}</p>
      <p>Langugaes: {arr.join(", ")}</p>
      <p>Country code: {props.country.ccn3}</p>
      <p>Population: {props.country.population}</p>
      <p>Region: {props.country.region}, Subregion: {props.country.subregion}</p>
      <div className='armDiv'><span>National Emblem: </span><img className='armimg' src={props.country.coatOfArms.png} alt="" /></div>
    </div>
  )
}

export default Country;