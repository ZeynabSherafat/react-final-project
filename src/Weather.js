import React from "react";
import "./Weather.css"

export default function Weather(){
    return (
        <div className="Weather">
            <form>
                <input
                type="text"
                placeholder="Enter a city"
                ></input>
            </form>
        </div>
    )
}