import React, { Component } from 'react';
import Select from './js/Select';
import DistanceHolder from './js/DistanceHolder';
import Map from './js/Map';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.setAirport = this.setAirport.bind(this);
  }
  state = {
    sourceAirport: {},
    destinationAirport: {}
  };
  setAirport(airport, isSource) {
    if (isSource) {
      if (this.state.sourceAirport.code !== airport.code) this.setState({ sourceAirport: airport });
    } else {
      if (this.state.destinationAirport.code !== airport.code) this.setState({ destinationAirport: airport });
    }
  }
  render() {
    return (
      <section className="airportApp">
        <section className="airportApp__airportSelector">
          <Select isSource setAirport={this.setAirport} selectedAirport={this.state.sourceAirport} />
          <div className="airportApp__airportSelector__switch">→</div>
          <Select setAirport={this.setAirport} selectedAirport={this.state.destinationAirport} />
        </section>
        <DistanceHolder sourceAirport={this.state.sourceAirport} destinationAirport={this.state.destinationAirport} />
        <Map sourceAirport={this.state.sourceAirport} destinationAirport={this.state.destinationAirport} />
      </section>
    );
  }
}

export default App;
