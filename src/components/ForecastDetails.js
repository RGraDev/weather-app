import React from "react";
import iconData from "../data/iconData.json";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const { date, description, temperature, humidity, wind, icon } = forecast;

  const formattedDate = new Date(date).toDateString();
  const weatherCode = Math.floor(icon / 100) * 100;

  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__description">{description}</div>
      <div className="forecast-details__icon">
        <img src={iconData[weatherCode]} alt="weather icon" />
      </div>
      <div className="forecast-details__min-temp">
        Min Temp: {temperature.min}&deg;C
      </div>
      <div className="forecast-details__max-temp">
        Max Temp: {temperature.max}&deg;C
      </div>
      <div className="forecast-details__humidity">Humidity: {humidity}</div>
      <div className="forecast-details__wind-speed">
        Wind Speed: {wind.speed}mph
      </div>
      <div className="forecast-details__wind-direction">
        Wind Direction: {wind.direction.toUpperCase()}
      </div>
    </div>
  );
}
export default ForecastDetails;
