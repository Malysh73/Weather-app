import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import mapboxgl from 'mapbox-gl';
import { fetchWeather } from '../api/fetchWeather';

mapboxgl.accessToken = 'pk.eyJ1IjoiZGFucGUiLCJhIjoiY2t6bXU4M3MwMnM3bzJvb2N3YnZpdHFkNiJ9.pumYaHbnfCKFH3Hdm0Rh0w';

const Map = props => {
  const { mapRef, addMarker } = props;
	const mapContainerRef = useRef(null);
	const { lng, lat, bbox, zoom } = useSelector(s => s.map);

  useEffect(() => {
		const fetchData = async () => {
			if (mapRef.current) return; // initialize map only once
			mapRef.current = new mapboxgl.Map({
				container: mapContainerRef.current,
				style: 'mapbox://styles/mapbox/streets-v11',
				center: [lng, lat],
				zoom: zoom,
			});
			const weatherData = await fetchWeather(lng, lat, bbox);
			addMarker(lng, lat, weatherData)
		}
		fetchData()
  }, [lat, lng, mapContainerRef, mapRef, bbox, zoom, addMarker])

  return (
    <div ref={mapContainerRef} className="map-container" />
  ); 
};

export default Map;