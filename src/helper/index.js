export const createWeatherDescription = data => {
	const { weather, main: { temp } } = data;
	const description = weather[0].description;

	return `
			<h3>${description}, ${temp ? '+' : ''}${temp}°C</h3>
	`;
};