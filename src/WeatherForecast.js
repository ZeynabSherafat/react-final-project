import React, {useState, useEffect} from "react";
import axios from 'axios';
import DailyForecast from "./DailyForecast";

export default function WeatherForecast(props){
    let [ready,setReady] = useState(false);
let [forecast, setForecast] = useState({})

useEffect(() => {
    setReady(false);
}, [props.coordinates])

    function fetchForecastData(response){
    setForecast(response.data.daily)
        setReady(true);
    }

function Load(){
    let apiKey = "97bed167ec49bff56e6c1b63daef9c86"
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    axios.get(forecastUrl).then(fetchForecastData);
}

if (ready){
    return (
        <div className="WeatherForecast">
        <row>
            {forecast.map(function(eachDayForecast, index){
                if (index < 5) {
                return(
                    <div className="col" key={index}>
                <DailyForecast data = {eachDayForecast}/>
                </div>
                )} else {
                    return null;
                }
            })}
           
      </row> 
      </div>
    )
} else {
    Load();
    return null;
}
}