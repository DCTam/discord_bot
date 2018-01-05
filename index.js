//Import discord.js
const Discord = require('discord.js');

//Create bot client
const bot = new Discord.Client();

//Retrieve configurations
let configs = require('./src/configs.json');

//Notify that bot is running
bot.on('ready', () => {
	console.log("Bot now running...");

	//Sets bot game status
	bot.user.setGame('!help for commands');
});

//Commands
bot.on('message', (message) => {
	
	//Returns a list of commands
	if(message.content.startsWith(configs.prefix + 'help')){
		require('./src/commands/help_command.js')(message);
	}

	//Roll a die once and return 1-6
	if(message.content.startsWith(configs.prefix + 'roll')){
		require('./src/commands/roll_command.js')(message);
	}

	//Check weather based on ZIP
	if(message.content.startsWith(configs.prefix + 'weather')){
		require('./src/commands/weather_command.js')(message, configs.weather_api_key);
	}

	//Check is a Twitch streamer on based on channel name
	if(message.content.startsWith(configs.prefix + 'ison')){
		require('./src/commands/twitch_stalk_command.js')(message, configs.twitch_id);
	}

	//Returns rank information of user using Overbuff's data
	if(message.content.startsWith(configs.prefix + 'rank')){
		require('./src/commands/rank_scrape_command.js')(message);
	}

	// Returns information on a specific coin based on symbol.
	if(message.content.startsWith(configs.prefix + 'coin')){
		require('./src/commands/coin_market.js')(message);
	}

	// if(message.author.username == 'Jnt'){
	// 	message.channel.sendMessage('stfu');
	// }


});

bot.login(configs.token);