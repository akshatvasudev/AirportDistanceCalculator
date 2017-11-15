import React, { Component } from 'react';
class Input extends Component {
	constructor(props) {
		super(props);
		this._onChange = this._onChange.bind(this);
		this._onClick = this._onClick.bind(this);
	}
	state = {
		i: ''
	};

	_onChange(e) {
		this.setState({ i: e.target.value });
		this.props.handleUserInput(e);
	}
	_onClick(e) {
		this.setState({ i: '' });
		this.props.handleUserClick(e);
	}

	render() {
		let airportType = this.props.isSource ? 'Source' : 'Destination';
		return (
			<input
				onChange={this._onChange}
				onClick={this._onClick}
				placeholder={`Enter ${airportType} airport`}
				className="airportApp__airportSelector__selector__input"
				value={this.props.selectedAirport ? this.props.selectedAirport.name : this.state.i}
				title={this.props.selectedAirport ? this.props.selectedAirport.name : this.state.i}
			/>
		);
	}
}

export default Input;
