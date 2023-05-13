import React from "react";

export default function CurrentDate(){
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] 
  let date = new Date();
   let day = weekDays[date.getDay()];

   let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October" , "November", "December"]
   let month = months[date.getMonth()];

   let year = date.getFullYear();
   let hour = date.getHours();
   let minute = date.getMinutes();
   if (hour < 10){
    hour = `0${hour}`
   }
   if (minute < 10){
    minute = `0${minute}`
   }

   return(
    <div className="CurrentDate">
    <h5><span>{day}</span>,{" "}<span>{hour}:{minute}</span></h5>
    <h5>{month} {year}</h5>
    </div>
   )
}