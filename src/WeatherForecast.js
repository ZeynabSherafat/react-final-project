import React, {useState} from "react";
import axios from 'axios';

export default function WeatherForecast(props){
    console.log(props);
    let [ready,setReady] = useState(false);
function fetchForecastData(response){
    console.log(response);
    setReady(true);
}
let apiKey = "97bed167ec49bff56e6c1b63daef9c86"
let latitude = props.coordinates.lat;
let longitude = props.coordinates.lon;
let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=daily&appid=${apiKey}`
axios.get(forecastUrl).then(fetchForecastData);
if (ready === true ){
    return (
        <div className="WeatherForecast">
        <row>
        <div className="col">
            <span className="forecast-temp">17°/25°</span>
            <span className="forecast-date">Sun</span>
      <hr />
        </div>
      </row> 
      </div>
    )
} else {
    return "hello"
}
}