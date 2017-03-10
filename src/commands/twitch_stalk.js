module.exports = (message, id) => {
	//let Promise = require("bluebird");
	let rp = require('request-promise');

	let username = message.content.split(" ")[1];
	let channel_id;

	rp({
		url: `https://api.twitch.tv/kraken/users/${username}`,
		json: true,
		method: 'GET',
		headers: {
			'Client-ID': id,
			'Accept': 'application/vnd.twitchtv.v3+json'
		}
		})
	.then((response) => {
		channel_id = response._id;
		return rp({
			url: `https://api.twitch.tv/kraken/streams/${channel_id}`,
			json: true,
			method: 'GET',
			headers: {
				'Client-ID': id,
				'Accept': 'application/vnd.twitchtv.v5+json'
			}
		});
	})
	.then((r) => {
		if(r.stream != null){
			message.channel.sendMessage('```javascript\n' + r.stream.channel.display_name + ' is playing ' + r.stream.game + 
										'\nCurrent viewers: ' + r.stream.viewers +
										'\nLink: ' + r.stream.channel.url +
										'```');
		}
		else{
			message.channel.sendMessage('`\'' + username + '\' is currently offline`');
		}
	})
	.catch((err) => {
		message.channel.sendMessage('`' + err.response.body.message +'`');
	})

}

//115495416
//37402112