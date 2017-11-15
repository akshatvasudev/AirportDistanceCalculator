/* eslint no-console: 0 */
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const buffer = fs.readFileSync('./airports.json');
const airports = JSON.parse(buffer);
const app = express();
app.use(cors());
const USAirportsOnly = airports.filter(airport => airport.country == 'United States');

app.get('/getData/:userString', (req, res) => {
	const filteredAirports = USAirportsOnly.filter(airport => {
		//console.warn(`${airport.code} ${airport.name} ${airport.city} ${airport.state}`);
		return (
			`${airport.code} ${airport.name} ${airport.city} ${airport.state}`
				.toUpperCase()
				.indexOf(req.params.userString.toUpperCase()) >= 0
		);
	});
	if (filteredAirports.length > 0) {
		res.json(filteredAirports);
	} else {
		res.json([]);
	}
});

app.listen(9000);
