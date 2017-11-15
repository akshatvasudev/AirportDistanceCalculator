import React from 'react';
const Dropdown = props => {
	const airportMarkup = props.airports.map(airport => (
		<li
			key={airport.woeid}
			onClick={e => {
				props.setAirport(airport);
			}}
		>
			{airport.name}
		</li>
	));

	return (
		<ul
			className="airportApp__airportSelector__selector__dropdown"
			style={airportMarkup.length > 0 ? { display: 'block' } : { display: 'none' }}
		>
			{airportMarkup}
		</ul>
	);
};

export default Dropdown;
