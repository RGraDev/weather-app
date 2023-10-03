import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

function App(props) {
  const { forecasts, location } = props;

  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastDetails forecast={forecasts[0]} />
      <ForecastSummaries forecasts={forecasts} />
    </div>
  );
}

export default App;
