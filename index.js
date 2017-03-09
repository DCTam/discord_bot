const Discord = require('discord.js');
const bot = new Discord.Client();

let configs = require('./configs/configs.json');

bot.on('message', (message) => {
	if(message.content == '!play'){
		//message.reply('Now playing');
		message.channel.sendMessage('Now playing');
	}
})

bot.login(configs.token);