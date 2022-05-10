import React, { useState } from "react";
import useWeather from "../../hooks/useWeather";
import "./Weather.css";
const Weather = () => {
  //Uso del hook pesonalizado
  const { compoWeather, degrees, isCelcious, changeDegrees } = useWeather();

  console.log(compoWeather);
  return (
    <div className="content-weather">
      <div className="item-weather">
        <div className="header-weather">
          <h1>Weather App</h1>
        </div>
        <div className="header-weather">
          <h3>
            City:{compoWeather?.name}, {compoWeather?.sys.country}{" "}
          </h3>
        </div>
      </div>
      <div className="item-weather">
        <div className="main-weather">
          <h3>{degrees}</h3>
          <h3>{isCelcious ? "C°" : "F°"}</h3>
        </div>
        <div className="main-weather">
          <div className="weather">
            <h3>{compoWeather?.weather[0].description}</h3>
            <div className="wind-weather">
              <i className="fa-solid fa-wind"></i>
              <h3>Wind speed: {compoWeather?.wind.speed} m/s</h3>
            </div>
          </div>
          <div className="weather">
            <i className="fa-regular fa-cloud"></i>
            <h3 className="">Clouds: {compoWeather?.clouds.all} %</h3>
          </div>
          <div className="weather">
            <i className="fa-solid fa-temperature-empty"></i>
            <h3 className="">Preassure:{compoWeather?.main.pressure} mb</h3>
          </div>
        </div>
      </div>
      <div className="item-weather">
        <div className="footer-weather">
          <button onClick={changeDegrees}>Change grades : </button>
        </div>
      </div>
    </div>
  );
};

export default Weather;
