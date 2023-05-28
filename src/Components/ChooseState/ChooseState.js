import React from "react";
import cities from "../../data/in.json";
import { UseWeatherAppContext } from "../../Context/Context";
import axios from "axios"
import { useEffect } from "react";


const ChooseState = () => {

    const { state: { city }, dispatch } = UseWeatherAppContext();

    const handleChange = (e)=>{
        const selectedCity = cities.filter(
            (city) => city.city === e.target.value
        )[0]
        //console.log('selectedCity', selectedCity);
        dispatch({
            type:'SET_CITY',
            payload:{...selectedCity}
        })
    }
//Api call
const APIKEY = '34480b98aa332da53123a0ac63a4ea9d';
let lat = city && city.lat ? city.lat : '';
let long = city && city.lng ? city.lng : '';
let exclude = 'hourly,minutely';
const URL =  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${exclude}&units=metric&lang=tr&appid=${APIKEY}`
//`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${APIKEY}`
    
    
    
const fetchData = ()=>{
    axios(URL).then((data)=>{
        let _daily = data.data.daily
        dispatch({
            type:'SET_DAILY',
            payload:_daily
        })
        
    })
}
useEffect(()=>{
   fetchData();
   // eslint-disable-next-line
}, [city])


  return (
    <div className="stateWrap">
      <select name="" id="" className="stateMenu" defaultValue={city} onChange={handleChange}>
        {cities &&
          cities.length > 0 &&
          cities.map((city) => {
            return (
              <option key={`${city.population}${city.lat}`} value={city.city}>
                {city.city} - {city.admin_name}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default ChooseState;
