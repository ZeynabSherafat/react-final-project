import React from "react"
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast(props){
    function day(){
        let date = new Date (props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        return days[day]
    }
    return(
    <div className="DailyForecast">
         <WeatherIcon code={props.data.weather[0].icon} color="white" size={30} />
            <span className="forecast-temp">{Math.round(props.data.temp.min)}°/{Math.round(props.data.temp.max)}°</span>
            <span className="forecast-date">{day()}</span>
      <hr />
    </div>
    )
}
