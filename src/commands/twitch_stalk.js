module.exports = (message, id) => {
	let request = require('request');

	request({
		url: 'https://api.twitch.tv/kraken/users/chubssss',
		json: true,
		method: 'GET',
		headers: {
			'Client-ID': id,
			'Accept': 'application/vnd.twitchtv.v3+json'
		}
	},
		function(err, res, body){
			if(err){
				message.channel.sendMessage("Error calling API");
				return;
			}
			console.log(body);
		}
	
	);
}