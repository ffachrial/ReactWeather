import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import { getTemp } from 'openWeatherMap';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  handleSearch (location) {
    const that = this;

    this.setState({
      isLoading: true
    });

    getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, function (errorMessage) {
      that.setState({
        isLoading: false
      });
      alert(errorMessage);
    });
  };

  render() {
    const {location, temp, isLoading} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>

      }
    }

    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch.bind(this)} />
        {renderMessage()}
      </div>
    );
  }
};
