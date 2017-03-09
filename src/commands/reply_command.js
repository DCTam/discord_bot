module.exports = (args) => {
	args.bot.on('message', (message) => {
	if(message.content.startsWith(args.configs.prefix + 'play')){
		message.channel.sendMessage("Now playing");
	}
	if(message.content.startsWith(args.configs.prefix + 'stop')){
		message.channel.sendMessage("Stopped");
	}

	});
};