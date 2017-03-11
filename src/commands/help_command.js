module.exports = (message) => {
	message.author.sendMessage('```' + 
								'\n\n!roll - Roll a die once' +
								'\n\n!weather <ZIP Code> - Input a 5 digit ZIP code to check weather' +
								'\n\n!ison <Twitch Channel ID> - Check to see if streamer is on' + 
								'\n\n!rank <Battle Tag> - Input case-sensitive battle tag to retrieve rank information on Overwatch' +
								'```');
}