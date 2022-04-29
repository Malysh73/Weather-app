import React from 'react';
import { useSelector } from 'react-redux';

const List = props => {
  const { handleClick } = props;
	const { lng, lat } = useSelector(s => s.map)
	const { countries } = useSelector(s => s.countries)

  return (
    <>
      <div className="sidebar">
        <div className="coords">Longitude: {lng} | Latitude: {lat}</div>
        {countries.map(({ country: name, bbox, longitude, latitude  }) => {
          return (
          	<div
          	  key={name}
							className="countryName"
          	  onClick={() => handleClick(bbox, longitude, latitude)}
          	>
							{name}
        		</div>
					)
        })}
      </div>
    </>
  );
};

export default List;