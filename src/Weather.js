import React, {useState} from "react";
import "./Weather.css"

export default function Weather(){
  let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] 
  let date = new Date();
   let day = weekDays[date.getDay()];

   let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October" , "November", "December"]
   let month = months[date.getMonth()];

   let year = date.getFullYear();
   console.log(year);
   let hour = date.getHours();
   let minute = date.getMinutes();
   if (hour < 10){
    hour = `0${hour}`
   }
   if (minute < 10){
    minute = `0${minute}`
   }

   let [city, setCity] = useState("")

   function handleSubmit(event){
    event.preventDefault();
    let apiKey = "97bed167ec49bff56e6c1b63daef9c86"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
   }

   function replaceCity(event){
    setCity(event.target.value)
   }

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
            <h5><span>{day}</span>,{" "}<span>{hour}:{minute}</span></h5>
            <h5>{month} {year}</h5>
            <h3>Mostly Cloudy</h3>
            <h1>9°C</h1>
            <h2>Karaj, Iran</h2>
            </div>
            <div className="col-5" id="forecast">
            <row>
            <div className="col">
                <span className="forecast-temp">17°/25°</span>
                <span className="forecast-date">Sun</span>
          <hr />
            </div>
          </row>
          <row>
            <div className="col">
                <span className="forecast-temp">12°/16°</span>
                <span className="forecast-date">Mon</span>
          <hr />
            </div>
          </row>
          <row>
            <div className="col">
                <span className="forecast-temp">9°/17°</span>
                <span className="forecast-date">Tue</span>
          <hr />
            </div>
          </row>
          <row>
            <div className="col">
                <span className="forecast-temp">11°/21°</span>
                <span className="forecast-date">Wed</span>
          <hr />
            </div>
          </row>
          <row>
            <div className="col">
                <span className="forecast-temp">13°/18°</span>
                <span className="forecast-date">Thu</span>
          <hr />
            </div>
          </row>
          </div>
          </div>
          </div>
        </div>
    )
}