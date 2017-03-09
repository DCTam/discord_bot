module.exports = (message, key) => {
	let request = require('request');

	let zip = message.content.slice(9);
	console.log(zip);
	let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${key}`;

	request({
		url: url,
		json: true
	},
		function(err, res, body){

			if(err){
				message.channel.sendMessage("Cannot find location");
				return;
			}
			let tempF = (((body.main.temp - 273.15) * 1.8) + 32).toFixed(2);
			message.channel.sendMessage(`The weather in ${body.name} is ${tempF} degrees Fahrenheit`);
			
		}
	);

}

