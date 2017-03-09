//Import discord.js
const Discord = require('discord.js');

//Create client from Discord object
const bot = new Discord.Client();

//Retrieve configurations
let configs = require('./configs.json');

//Bundle variables to pass to commands
let args = {
	configs,
	bot
}

//Notify that bot is running
bot.on('ready', () => {
	console.log("Bot now running...");

})

//Commands
bot.on('message', (message) => {
	if(message.content.startsWith(configs.prefix + 'play')){
		//message.channel.sendMessage("Now playing");
	}
	if(message.content.startsWith(configs.prefix + 'stop')){
		message.channel.sendMessage("Stopped");
	}

	if(message.content.startsWith(configs.prefix + 'roll')){
		require('./commands/roll_command.js')(message);
	}

})

bot.login(configs.token);