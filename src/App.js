import React, { useState, useEffect } from "react";
import "./App.css";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import Footer from "./Footer";

function App() {
  const MAX_NUMBER_OF_MATCHING_CITIES = 40000;
  const [allCities, setAllCities] = useState([]);
  const [matchingCities, setMatchingCities] = useState([]);
  const [regex, setRegex] = useState(false);
  const [fragment, setFragment] = useState("");
  const [loading, setLoading] = useState(false);

  const getAllCities = () => {
    setLoading(true);
    fetch("/cities.json")
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

      let filtered = allCities.filter(filter);
      console.log("Found " + filtered.length + " places");
      setLoading(false);
      setMatchingCities(
        filtered.length > MAX_NUMBER_OF_MATCHING_CITIES ? [] : filtered
      );
    }, 1000);

    return () => {
      setLoading(false);
      clearTimeout(timeoutId);
    };
  }, [allCities, fragment, regex]);

  function isValidFragment(fragment) {
    return !!fragment && fragment.length > 1;
  }

  return (
    <>
      <label>
        Wzorzec:
        <input
          type="text"
          minLength={2}
          value={fragment}
          onChange={(e) => setFragment(e.target.value.toLowerCase())}
        />
      </label>
      <label>
        <input
          type="checkbox"
          value={regex}
          onClick={(e) => setRegex(e.target.value)}
        ></input>
        Regex
      </label>

      <div style={{ textAlign: "center" }} hidden={!loading}>
        <h1>Ładowanie...</h1>
      </div>

      <div style={{ textAlign: "center" }} hidden={isValidFragment(fragment)}>
        <h1>Podany wzorzec jest za krótki</h1>
      </div>

      <div
        style={{ textAlign: "center" }}
        hidden={matchingCities.length < MAX_NUMBER_OF_MATCHING_CITIES}
      >
        <h1>
          Podany wzorzec pasuje do zbyt dużej liczby miast (
          {matchingCities.length})
          <br />- wywali przeglądarkę
        </h1>
      </div>

      <div
        style={{ textAlign: "center" }}
        hidden={loading || !isValidFragment(fragment)}
      >
        <h1>
          {fragment} {regex ? "(regex)" : ""}
        </h1>
        <h2>
          {" Znaleziono " +
            matchingCities.length +
            (matchingCities.length === 1
              ? " miejscowość."
              : " miejscowości.")}{" "}
        </h2>
      </div>

      <div hidden={loading}>
        <ComposableMap height={400} width={1200}>
          <ZoomableGroup
            minZoom={20}
            maxZoom={20}
            zoom={20}
            center={[19.1343786, 51.9189046]}
          >
            <Geographies geography={"/gadm36_POL_1.json"}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo} fill={"#ddd"} />
                ))
              }
            </Geographies>
            {matchingCities.map((city, i) => (
              <Marker key={i} coordinates={[city.Y, city.X]} fill="#777">
                <circle r={0.1} fill="#F53" />
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
