const WEATHER_API_TOKEN = 'd2477b03b1a6c7b8be1de5998706aecb';

export const fetchWeather = (longitude, latitude) => {
	return fetch(`
		https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${WEATHER_API_TOKEN}`
	)
	.then(response => {
		return response.json()}
	)
	.catch(e => console.log(e));
};