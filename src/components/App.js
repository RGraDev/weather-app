import "../styles/App.css";
import LocationDetails from "./LocationDetails";

function App({ location }) {
  const { city, country } = location;
  return (
    <div className="app">
      <LocationDetails city={city} country={country} />
    </div>
  );
}

export default App;