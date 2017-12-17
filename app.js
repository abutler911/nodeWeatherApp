const yargs = require("yargs");
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}

	})
	.help()
	.alias('help', 'h')
	.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
	if(errorMessage) {
		console.log(errorMessage);
	} else {
		console.log(results.address);
		weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
	if(errorMessage) {
			console.log(errorMessage);
	} else {
		console.log(`It's currently ${weatherResults.temperature}.`);
		console.log(`It feels like ${weatherResults.apparentTemperature}.`);
	}

});
	}
});

// api key 7255e4e0247fb4f85dfb1527cabd2d9b
//url https://api.darksky.net/forecast/7255e4e0247fb4f85dfb1527cabd2d9b/


