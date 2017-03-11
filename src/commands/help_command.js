module.exports = (message) => {
	message.author.sendMessage('```' + 
								'\n\n!roll - Roll a die' +
								'\n\n!weather <ZIP Code> - Input a 5 digit ZIP code to retreive weather information' +
								'\n\n!ison <Twitch Channel ID> - Check to see if streamer is on and returns channel information' + 
								'\n\n!rank <Battle Tag> - Input case-sensitive battle tag to retrieve rank information on Overwatch' +
								'```');
}