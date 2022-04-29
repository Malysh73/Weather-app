import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import mapboxgl from 'mapbox-gl';
import List from './components/countryList';
import Map from './components/map';
import { createWeatherDescription } from './helper';
import { fetchWeather } from './api/fetchWeather';
import { updateMapState } from './redux/reducers/map';

function App() {
  const map = useRef(null);
  const marker = useRef(null);
  const dispatch = useDispatch();

  const addMarker = (lng, lat, weather) => {
    const description = createWeatherDescription(weather);
    const newMarker = new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .setPopup(new mapboxgl.Popup().setHTML(description))
      .addTo(map.current);

    marker.current = newMarker;
  };

  const moveMap = bbox => map?.current.fitBounds(bbox);

  const flyTo = async (bbox, lng, lat) => {
    if (marker.current) {
      marker?.current.remove();
    }

    const weatherData = await fetchWeather(lng, lat, bbox);

    await dispatch(updateMapState({
      lng,
      lat,
      bbox,
    }))

    addMarker(lng, lat, weatherData);
    moveMap(bbox);
  }

  return (
    <div>
      <List handleClick={flyTo} />
      <Map addMarker={addMarker} mapRef={map} />
    </div>
  );
}

export default App;
