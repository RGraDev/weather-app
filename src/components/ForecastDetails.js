import React from "react";
import iconData from "../data/iconData.json";

function ForecastDetails({ forecast }) {
  const { date, description, temperature, humidity, wind, icon } = forecast;

  const formattedDate = new Date(date).toDateString();
  const weatherCode = Math.floor(icon / 100) * 100;

  return (
    <div className="forecast=details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__description">{description}</div>
      <div className="forecast-details__icon">
        <img src={iconData[weatherCode]} alt="weather icon" />
      </div>
      <div className="forecast-details__min-temp">{temperature.min}&deg;C</div>
      <div className="forecast-details__max-temp">{temperature.max}&deg;C</div>
      <div className="forecast-details__humidity">{humidity}</div>
      <div className="forecast-details__wind-speed">{wind.speed}mph</div>
      <div className="forecast-details__wind-direction">{wind.direction.toUpperCase()}</div>
    </div>
  );
}
export default ForecastDetails;
