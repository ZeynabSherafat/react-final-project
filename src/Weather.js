import React, {useState} from "react";
import axios from 'axios';
import CurrentDate from "./CurrentDate"
import WeatherIcon from "./WeatherIcon"
import WeatherForecast from "./WeatherForecast";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind, faDroplet } from '@fortawesome/free-solid-svg-icons'
import "./Weather.css"

export default function Weather(){
   let [city, setCity] = useState("")
   let [weather, setWeather] = useState("")
   let [on, setOn] = useState(false)

   function displayWeatherInfo(response){
    console.log(response);
    setWeather ({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      coords: response.data.coord
    })

    setOn(true)
   }

   

   function handleSubmit(event){
    event.preventDefault();
    let apiKey = "97bed167ec49bff56e6c1b63daef9c86"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(url).then(displayWeatherInfo);
   
   }

   function replaceCity(event){
    setCity(event.target.value)
   }

   if (on === true) {
  return (
        <div className="Weather">
            <div className="container"> 
            <div className="row">
                <div className="col-7">
            <form onSubmit={handleSubmit}>
            <input
            type="text"
            className="form-control"
            placeholder="Enter the city"
            autoComplete="off"
            id="search-bar"
            onChange={replaceCity}
          />
          <input type="submit" className="btn btn-primary" value="Search" id="submit-button"/>
            </form>
           <CurrentDate />
           <WeatherIcon code={weather.icon} color="#212529" size={45}/>
            <h3>{weather.description}</h3>
            <h6> <FontAwesomeIcon icon={faDroplet} /> Humidity: {weather.humidity}%</h6>
            <h6><FontAwesomeIcon icon={faWind} /> Windspeed: {Math.round(weather.wind)} km/h</h6>
            <h1>{Math.round(weather.temperature)}°C</h1>
            <h2>{weather.city}, {weather.country}</h2>
            </div>
            <div className="col-5" id="forecast">
              <WeatherForecast coordinates={weather.coords}/>
              </div>
          </div>
          </div>
        </div>
    )} else {
      let apiKey = "97bed167ec49bff56e6c1b63daef9c86"
let karajUrl =  `https://api.openweathermap.org/data/2.5/weather?q=karaj&appid=${apiKey}&units=metric`
axios.get(karajUrl).then(displayWeatherInfo);
return "Loading..."
    }
}