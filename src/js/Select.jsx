import React, { Component } from 'react';
import Input from './Input';
import Dropdown from './Dropdown';
import axios from 'axios';
//import propTypes from 'prop-types'

class Select extends Component {
	constructor(props) {
		super(props);
		this.handleUserInput = this.handleUserInput.bind(this);
		this.setAirport = this.setAirport.bind(this);
		this.handleUserClick = this.handleUserClick.bind(this);
	}
	state = {
		filteredAirports: []
	};
	getAirports(v) {
		axios.get(`http://localhost:9000/getData/${v}`).then(data => {
			this.setState({ filteredAirports: data.data });
		});
	}
	handleUserClick(e) {
		this.setAirport({}, this.props.isSource);
	}
	setAirport(airport) {
		this.props.setAirport(airport, this.props.isSource);
		this.setState({ filteredAirports: [] });
	}
	handleUserInput(e) {
		if (e.target.value.length < 3) {
			return false;
		}
		this.getAirports(e.target.value);
	}
	render() {
		const InputField = this.props.selectedAirport.name
			? <Input
					isSource={this.props.isSource}
					handleUserInput={this.handleUserInput}
					selectedAirport={this.props.selectedAirport}
					handleUserClick={this.handleUserClick}
				/>
			: <Input
					isSource={this.props.isSource}
					handleUserInput={this.handleUserInput}
					handleUserClick={this.handleUserClick}
				/>;
		return (
			<div className="airportApp__airportSelector__selector">
				{InputField}
				<Dropdown airports={this.state.filteredAirports} setAirport={this.setAirport} />
			</div>
		);
	}
}

export default Select;
