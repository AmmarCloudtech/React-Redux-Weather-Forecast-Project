import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {
renderWeather(cityData) {
  const name = cityData.city.name;
  const temps = cityData.list.map(asdf => asdf.main.temp); // IF TO CONVERT TO CENTIGRADE_.map(cityData.list.map(asdf => asdf.main.temp), (temp) => temp - 273.15);
  const pressures = cityData.list.map(jkl => jkl.main.pressure);
  const humidities = cityData.list.map(qwer => qwer.main.humidity);
  // const lon = cityData.city.coord.lon;
  // const lat = cityData.city.coord.lat;
  // IN ES6 ABOEV IS SAME AS
  const { lon, lat } = cityData.city.coord; // If using this terminology the name specified here must be equal to the name in properties.


  return (
    <tr key = {name}>
      <td><GoogleMap lon={lon} lat={lat} /></td>
      <td><Chart data={temps} color="orange" units="K" /></td>
      <td><Chart data={pressures} color="green" units="hPa" /></td>
      <td><Chart data={humidities} color="black" units="%"/></td>
    </tr>
  );
}

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temprature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>

    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
