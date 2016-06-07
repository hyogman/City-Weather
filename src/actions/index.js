import axios from 'axios';

const API_KEY = '201b3a9d298e662b8695f6dc2adbd776';
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; 

export const FETCH_WEATHER = 'FEATCH_WEATHER';

export function fetchWeather(city) {
	const URL = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(URL);

	// using redux-promise middleware here. 
	

	return {
		type: FETCH_WEATHER,
		payload:request 

	};

}