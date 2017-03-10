//Import discord.js
const Discord = require('discord.js');

//Create client from Discord object
const bot = new Discord.Client();

//Retrieve configurations
let configs = require('./configs.json');

//Notify that bot is running
bot.on('ready', () => {
	console.log("Bot now running...");

});

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
	if(message.content.startsWith(configs.prefix + 'weather')){
		require('./commands/weather_command.js')(message, configs.weather_api_key);
	}

	if(message.content.startsWith(configs.prefix + 'ison')){
		require('./commands/twitch_stalk.js')(message, configs.twitch_id);
	}

	if(message.content.startsWith(configs.prefix + 'rank')){
		require('./commands/rank_scrape.js')(message);
	}

});

bot.login(configs.token);