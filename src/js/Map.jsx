import React, { Component } from 'react';
class Map extends Component {
	constructor(props) {
		super(props);
		//let map = undefined, srcPin = undefined, destPin = undefined, path = undefined;
	}
	renderMap(src, dest) {
		let srcCoord = {};
		if (src.lat) {
			srcCoord = { lat: parseFloat(src.lat, 10), lng: parseFloat(src.lon, 10) };
			if (this.srcPin) {
				if (
					parseFloat(this.srcPin.position.lat().toFixed(4), 10) !== srcCoord.lat &&
					parseFloat(this.srcPin.position.lng().toFixed(4), 10) !== srcCoord.lng
				) {
					this.srcPin.setMap(null);
					this.srcPin = new window.google.maps.Marker({
						position: srcCoord,
						//animation: window.google.maps.Animation.DROP,
						map: this.map,
						label: 'S'
					});
				}
			} else {
				this.srcPin = new window.google.maps.Marker({
					position: srcCoord,
					//animation: window.google.maps.Animation.DROP,
					map: this.map,
					label: 'S'
				});
			}
		}

		if (dest.lat) {
			destCoord = { lat: parseFloat(dest.lat, 10), lng: parseFloat(dest.lon, 10) };
			if (this.destPin) {
				if (
					parseFloat(this.destPin.position.lat().toFixed(4), 10) !== destCoord.lat &&
					parseFloat(this.destPin.position.lng().toFixed(4), 10) !== destCoord.lng
				) {
					this.destPin.setMap(null);
					this.destPin = new window.google.maps.Marker({
						position: destCoord,
						//animation: window.google.maps.Animation.DROP,
						map: this.map,
						label: 'S'
					});
				}
			} else {
				this.destPin = new window.google.maps.Marker({
					position: destCoord,
					//animation: window.google.maps.Animation.DROP,
					map: this.map,
					label: 'S'
				});
			}
		}

		if (this.destPin) this.destPin.setMap(null);
		let destCoord = { lat: parseFloat(dest.lat, 10), lng: parseFloat(dest.lon, 10) };
		this.destPin = new window.google.maps.Marker({
			position: destCoord,
			//animation: window.google.maps.Animation.DROP,
			map: this.map,
			label: 'D'
		});

		if (this.path) this.path.setMap(null);
		this.path = new window.google.maps.Polyline({
			path: [srcCoord, destCoord],
			geodesic: true,
			strokeColor: '#004aff',
			strokeOpacity: 1,
			strokeWeight: 2,
			map: this.map
		});
	}
	shouldComponentUpdate(nextProps, nextState) {
		return (
			nextProps.sourceAirport.code !== this.props.sourceAirport.code ||
			nextProps.destinationAirport.code !== this.props.destinationAirport.code
		);
	}
	componentDidMount() {
		this.map = new window.google.maps.Map(document.getElementById('map'), {
			zoom: 4,
			center: { lat: 39.8283, lng: -98.5795 }
		});
	}
	componentDidUpdate(prevProps, prevState) {
		//if (this.props.sourceAirport.code && this.props.destinationAirport.code)
		this.renderMap(this.props.sourceAirport, this.props.destinationAirport);
	}
	render() {
		return <div id="map" />;
	}
}
export default Map;
