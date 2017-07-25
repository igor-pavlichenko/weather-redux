import axios from 'axios';
import * as Types from '../types.js';

const API_KEY = 'ad40d51a786cfe57bfc2ff24f5737928';
const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export function fetchWeather(city) {
  const url = `${BASE_URL}&q=${city},pt&units=metric`;
  const request = axios.get(url);

  return {
    type: Types.FETCH_WEATHER,
    payload: request,
  };
}
