import React, { useState, useEffect } from "react";
import "./style.css";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import IconSelector from "./components/IconSelector";
import PopUpTable from "./components/PopUpTable";
import Input from "./components/Input";
import * as mapData from "./data.json";
import "./style.scss";

import {
  pointsOfInterest,
  mappingRounds,
  operationalChallanges,
  facilitiesShared,
  countries
} from "./constants";

function App() {
  const [viewport, setViewport] = useState({
    latitude: 0.336765,
    longitude: 34.169276,
    zoom: 9.9,
    width: "100vw",
    height: "100vh"
  });
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [filteredLocation, setFilteredLocation] = useState([]);
  const [filterMethod, setFilterMethod] = useState({
    Broad_Category: [],
    Round_of_Mapping: [],
    Challenges_facility_sharing_present: [],
    sharing: [],
    country: []
  });

  const handleChange = e => {
    if (e.target.checked) {
      setFilterMethod({
        ...filterMethod,
        [e.target.name]: [...filterMethod[e.target.name], e.target.value]
      });
    } else {
      setFilterMethod({
        ...filterMethod,
        [e.target.name]: [
          ...filterMethod[e.target.name].filter(item => item !== e.target.value)
        ]
      });
      setFilteredLocation([
        ...filteredLocation.filter(
          location => location.properties[e.target.name] !== e.target.value
        )
      ]);
    }
  };

  const filterByType = location => {
    if (filterMethod.Broad_Category.length > 0) {
      return filterMethod.Broad_Category.includes(
        location.properties.Broad_Category
      );
    } else {
      return true;
    }
  };

  const filterByRound = location => {
    if (filterMethod.Round_of_Mapping.length > 0) {
      return filterMethod.Round_of_Mapping.includes(
        location.properties.Round_of_Mapping
      );
    } else {
      return true;
    }
  };

  const filterBySharing = location => {
    if (filterMethod.sharing.length > 0) {
      return filterMethod.sharing.includes(
        location.properties.Facility_Service_shared_by_people
      );
    } else {
      return true;
    }
  };

  const filterByChallanges = location => {
    if (filterMethod.Challenges_facility_sharing_present.length > 0) {
      return filterMethod.Challenges_facility_sharing_present.includes(
        location.properties.Challenges_facility_sharing_present
      );
    } else {
      return true;
    }
  };

  const filterByCountry = location => {
    if (filterMethod.country.length > 0) {
      return filterMethod.country.includes(location.properties.Country);
    } else {
      return true;
    }
  };

  useEffect(() => {
    let locations = mapData.features.filter(
      location =>
        filterByType(location) &&
        filterByChallanges(location) &&
        filterByCountry(location) &&
        filterByRound(location) &&
        filterBySharing(location)
    );
    setFilteredLocation([...locations]);
    if (
      filterMethod.Broad_Category.length === 0 &&
      filterMethod.Challenges_facility_sharing_present.length === 0 &&
      filterMethod.Round_of_Mapping.length === 0 &&
      filterMethod.country.length === 0 &&
      filterMethod.sharing.length === 0
    ) {
      setFilteredLocation([]);
    }
  }, [filterMethod]);

  return (
    <div className="main">
      <ReactMapGL
        {...viewport}
        onViewportChange={viewport => setViewport(viewport)}
        mapStyle="mapbox://styles/codingkelvin/ck1gpdbhv2da61ct9z5n6ojqi"
      >
        {filteredLocation.map((location, i) => (
          <Marker
            key={i}
            latitude={location.geometry.coordinates[1]}
            longitude={location.geometry.coordinates[0]}
          >
            <button
              className="marker-button"
              onClick={e => {
                e.preventDefault();
                setSelectedLocation(location);
              }}
            >
              <IconSelector name={location.properties.Broad_Category} />
            </button>
          </Marker>
        ))}
        <div className="navigation-control">
          <NavigationControl />
        </div>
        {selectedLocation && (
          <Popup
            latitude={selectedLocation.geometry.coordinates[1]}
            longitude={selectedLocation.geometry.coordinates[0]}
            onClose={() => setSelectedLocation(null)}
          >
            <PopUpTable selectedLocation={selectedLocation} />
          </Popup>
        )}
      </ReactMapGL>
      <div className="sidebar">
        <div className="title">
          <span>DMERL EASSI PROJECT</span>
        </div>
        <div className="inputs">
          <div className="point-of-interest">
            <div className="input-title">
              <span>Points of interest</span>
            </div>
            {pointsOfInterest.map((point, i) => {
              let icon = <IconSelector name={point.value} />;
              return (
                <Input
                  key={i}
                  icon={icon}
                  name={point.label}
                  value={point.value}
                  title={point.title}
                  onChange={handleChange}
                />
              );
            })}
          </div>
          <div className="round-of-mapping item">
            <div className="input-title">
              <span>Round of Mapping</span>
            </div>
            {mappingRounds.map((point, i) => {
              return (
                <Input
                  key={i}
                  name={point.label}
                  value={point.value}
                  title={point.title}
                  onChange={handleChange}
                />
              );
            })}
          </div>
          <div className="operational-challenges item">
            <div className="input-title">
              <span>Operational Challanges</span>
            </div>
            {operationalChallanges.map((point, i) => (
              <Input
                key={i}
                name={point.label}
                value={point.value}
                title={point.title}
                onChange={handleChange}
              />
            ))}
          </div>
          <div className="shared-across-countries item">
            <div className="input-title">
              <span>Facilities shared across countries</span>
            </div>
            {facilitiesShared.map((point, i) => (
              <Input
                key={i}
                name={point.label}
                value={point.value}
                title={point.title}
                onChange={handleChange}
              />
            ))}
          </div>
          <div className="country item">
            <div className="input-title">
              <span>Country</span>
            </div>
            {countries.map((point, i) => (
              <Input
                key={i}
                name={point.label}
                value={point.value}
                title={point.title}
                onChange={handleChange}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
