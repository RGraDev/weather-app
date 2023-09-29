import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummary from "./ForecastSummary";

function App({ location }) {
  const { city, country } = location;

  return (
    <div className="app">
      <LocationDetails city={city} country={country} />
      <ForecastSummary />
    </div>
  );
}

export default App;
