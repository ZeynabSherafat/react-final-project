import React, {useState} from "react";
import axios from 'axios';
import DailyForecast from "./DailyForecast";

export default function WeatherForecast(props){
    let [ready,setReady] = useState(false);
let [forecast, setForecast] = useState({})

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
        <div className="col">
            <DailyForecast data = {forecast[0]}/>
            <DailyForecast data = {forecast[0]}/>
            <DailyForecast data = {forecast[0]}/>
            <DailyForecast data = {forecast[0]}/>
            <DailyForecast data = {forecast[0]}/>
        </div>
      </row> 
      </div>
    )
} else {
    Load();
    return null;
}
}