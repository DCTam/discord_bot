module.exports = (message) => {
	let random = Math.floor(Math.random() * 6) + 1;
	message.channel.sendMessage('```Java\n You rolled: ' + random + '```');
}