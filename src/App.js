import React, { useState, useEffect } from "react";
import ReactGA from 'react-ga'
import "./App.css";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

function App() {
  const MAX_NUMBER_OF_MATCHING_CITIES = 40000;
  const [allCities, setAllCities] = useState([]);
  const [matchingCities, setMatchingCities] = useState([]);
  const [regex, setRegex] = useState(false);
  const [fragment, setFragment] = useState("");
  const [loading, setLoading] = useState(false);
  const [clickedCity, setClickedCity] = useState("");

  const getAllCities = () => {
    setLoading(true);
    fetch(process.env.PUBLIC_URL + "/static/cities.json")
      .then((r) => r.json())
      .then((cities) => {
        setAllCities(cities);
        setLoading(false);
        console.log("JSON file loaded");
      });
  };

  useEffect(() => {
    getAllCities();
  }, []);

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      if (!isValidFragment(fragment)) {
        setMatchingCities([]);
        setLoading(false);
        return;
      }

      let filter = (city) => city.name.toLowerCase().includes(fragment);

      if (regex) {
        let expression = new RegExp(fragment, "i");
        filter = (city) => expression.test(city.name.toLowerCase());
      }

      ReactGA.event({
        category: 'Search',
        action: 'Pattern entered',
        label: fragment
      });

      let filtered = allCities.filter(filter);
      console.log("Found " + filtered.length + " places");
      setLoading(false);
      setMatchingCities(filtered);
    }, 1000);

    return () => {
      setLoading(false);
      clearTimeout(timeoutId);
    };
  }, [allCities, fragment, regex]);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  function isValidFragment(fragment) {
    return !!fragment && fragment.length > 1;
  }

  return (
    <div className="flex-col">
      <div className="flex-row" style={{ padding: "10px" }}>
        <label>
          Wzorzec:
          <input
            style={{ marginLeft: "5px" }}
            type="text"
            minLength={2}
            value={fragment}
            onChange={(e) => setFragment(e.target.value.toLowerCase())}
          />
        </label>
        <label style={{ marginLeft: "10px" }}>
          <input
            type="checkbox"
            value={regex}
            onClick={(e) => setRegex(e.target.value)}
          ></input>
          Regex
        </label>

        <div
          className="flex-col"
          hidden={!clickedCity}
          style={{ marginLeft: "auto", textAlign: "right" }}
        >
          <span>{clickedCity.name}</span>
          <span style={{ fontSize: "small" }}>
            <i>
              {clickedCity.X} {clickedCity.Y}
            </i>
          </span>
        </div>
        <span hidden={!!clickedCity} style={{ marginLeft: "auto" }}>
          <i>Kliknij na kropkę, aby sprawdzić nazwę</i>
        </span>
      </div>

      <div className="flex-col" style={{ textAlign: "center" }}>
        <div hidden={!loading}>
          <h3>Ładowanie...</h3>
        </div>

        <div hidden={isValidFragment(fragment) || loading}>
          <h3>Podany wzorzec jest za krótki</h3>
        </div>

        <div hidden={matchingCities.length < MAX_NUMBER_OF_MATCHING_CITIES}>
          <h3>
            Podany wzorzec pasuje do zbyt dużej liczby miast (
            {matchingCities.length})
            <br />- wywali przeglądarkę
          </h3>
        </div>

        <div hidden={loading || !isValidFragment(fragment)}>
          <h3>
            {fragment} {regex ? "(regex)" : ""}
          </h3>
          <h3>
            {" Znaleziono " +
              matchingCities.length +
              (matchingCities.length === 1
                ? " miejscowość."
                : " miejscowości.")}{" "}
          </h3>
        </div>
      </div>

      <div className="map flex-col flex-grow" hidden={loading}>
        <ComposableMap className="flex-col flex-grow" height={300}>
          <ZoomableGroup
            minZoom={17}
            maxZoom={17}
            zoom={17}
            center={[19.1343786, 51.9189046]}
          >
            <Geographies
              geography={process.env.PUBLIC_URL + "/static/gadm36_POL_1.json"}
            >
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo} fill={"#ddd"} />
                ))
              }
            </Geographies>
            {matchingCities.length < MAX_NUMBER_OF_MATCHING_CITIES &&
              matchingCities.map((city, i) => (
                <Marker key={i} coordinates={[city.Y, city.X]} fill="#777">
                  <circle
                    className="marker"
                    r={0.1}
                    fill="#F53"
                    onClick={() => setClickedCity(city)}
                  />
                </Marker>
              ))}
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>
  );
}

export default App;
