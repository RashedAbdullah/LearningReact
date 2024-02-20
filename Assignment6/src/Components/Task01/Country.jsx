import React from 'react';
import './Country.css';

const Country = (props) => {

  const langs = props.country.languages;
  const arr = [];
  for(let key in langs){
    arr.push(langs[key])
  }

  const currencyArr = [];
  const currency = props.country.currencies;
  for(let key in currency){
    currencyArr.push(currency[key]);
  }
  
  return (
    <div className='insideCountry'>
      <div className='flagdiv'><img className='flagimg' src={props.country.flags.png} alt={props.country.flags.alt} /></div>
      <div>Name: {
        (()=>{
          if(props.country.name.common === "Israel"){
            props.country.flags.png = "https://free-palestine.carrd.co/assets/images/gallery01/96c1520d.jpg?v=cd257226"
            props.country.name.common = "Free Palestine";
            props.country.capital = " ";
            props.country.ccn3 = " ";
            props.country.population = " ";
            props.country.region = " ";
            props.country.subregion = " ";
            props.country.coatOfArms.png = " ";

          } else {
            return props.country.name.common
          }
        })()}</div>
      <p>Capital: {props.country.capital}</p>
      <p>Langugaes: {arr.join(", ")}</p>
      {currencyArr.map(singleCurrency=>(
        <p>currency: {singleCurrency.name}, Symbol: {singleCurrency.symbol}</p>
      ))}
      <p>Country code: {props.country.ccn3}</p>
      <p>Population: {props.country.population}</p>
      <p>Region: {props.country.region}, Subregion: {props.country.subregion}</p>
      <div className='armDiv'><span>National Emblem: </span><img className='armimg' src={props.country.coatOfArms.png} alt="" /></div>
      {/* <p>{currencyArr}</p> */}
    </div>
  )
}

export default Country;