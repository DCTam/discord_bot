module.exports = (message, key) => {
	let request = require('request');

	//Validate user inputted ZIP code
	let zip = message.content.split(" ")[1];
	if(zip.length != 5){
		message.channel.sendMessage('`Please enter 5 digits for the ZIP code`');
		return;
	}

	//Create API call URL
	let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${key}`;

	//Call API
	request({
		url: url,
		json: true
	},
		function(err, res, body){

			if(err){
				message.channel.sendMessage('`Error retrieving weather`');
				return;
			}
			if(body.cod == 200){
				let tempF = (((body.main.temp - 273.15) * 1.8) + 32).toFixed(2);
				message.channel.sendMessage('`The weather in ' + body.name + ' is ' + tempF + ' degrees Fahrenheit`');
			}
			else {
				message.channel.sendMessage('`Cannot find location`');
			}
			
		}
	);

}

