const request = require('request');

var getWeather = (lat, lng, callback) => {
	request({
		url: `https://api.darksky.net/forecast/7255e4e0247fb4f85dfb1527cabd2d9b/${lat},${lng}`,
		json: true
	}, (error, response, body) => {
		if(!error && response.statusCode === 200 ) {
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature,
			});
			
		} else {
			callback('Unable to fetch weather.');
		} 	
	});
};

module.exports.getWeather = getWeather;

