import axios from 'axios';

const API_KEY = '3b8b495c535d444c91d2b61893f12ccb';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; // ES6 Template Strings ${ }

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},PK`;
  const request = axios.get(url);

console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
