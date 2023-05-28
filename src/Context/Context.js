import React, { useReducer, useContext } from "react";

import {WeatherReducer} from './Reducer';



const WeatherAPPContext = React.createContext();

const WeatherAPPProvider = ({children})=>{

    const [state, dispatch] = useReducer(WeatherReducer, {
        city:{
            "city": "Kolkāta", 
            "lat": "22.5675", 
            "lng": "88.3700", 
            "country": "India", 
            "iso2": "IN", 
            "admin_name": "West Bengal", 
            "capital": "admin", 
            "population": "18502000", 
            "population_proper": "4496694"
          },
          current:'',
          daily:''
    })

    
    //const APIKEY = ''
    return (
        <WeatherAPPContext.Provider value={{state, dispatch}} >
            {children}
        </WeatherAPPContext.Provider>
    )
}

export default WeatherAPPProvider;

export const UseWeatherAppContext = ()=>{
    return useContext(WeatherAPPContext);
}