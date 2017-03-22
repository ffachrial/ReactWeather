import Axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=5bc2ee9089964523e4f5949b13fd4f0a&units=metric';

export function getTemp (location) {
  const encodedLocation = encodeURIComponent(location);
  const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

  return Axios.get(requestUrl).then(function (res) {
    if (res.data.cod && res.data.message) {
      throw new Error(res.data.message);
    } else {
      return res.data.main.temp;
    }
  }, function (res) {
    throw new Error('Unable to fetch weather for that location');
  });
}
