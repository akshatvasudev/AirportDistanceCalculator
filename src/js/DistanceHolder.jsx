import React from 'react';
const DistanceHolder = props => {
	const deg2rad = deg => {
		return deg * (Math.PI / 180);
	};
	const calculateDistance = (point1, point2) => {
		var R = 6371; // Radius of the earth in km
		var dLat = deg2rad(point2.lat - point1.lat); // deg2rad below
		var dLon = deg2rad(point2.lng - point1.lng);
		var a =
			Math.sin(dLat / 2) * Math.sin(dLat / 2) +
			Math.cos(deg2rad(point1.lat)) * Math.cos(deg2rad(point2.lat)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		var d = R * c; // Distance in km
		return (d * 0.539957).toFixed(2); //distance in miles;
	};
	if (props.sourceAirport.code === undefined || props.destinationAirport.code === undefined)
		return <section className="airportApp__distanceHolder" />;
	else
		return (
			<section className="airportApp__distanceHolder">
				{`Distance between ${props.sourceAirport.code} & ${props.destinationAirport.code}: 
				${calculateDistance({ lat: props.sourceAirport.lat, lng: props.sourceAirport.lon }, { lat: props.destinationAirport.lat, lng: props.destinationAirport.lon })}
				Nautical Miles
				`}
			</section>
		);
};

export default DistanceHolder;
