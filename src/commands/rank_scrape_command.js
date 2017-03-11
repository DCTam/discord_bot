module.exports = (message) => {
	let osmosis = require('osmosis');

	let battle_tag = message.content.split(" ")[1];
	let query = battle_tag.replace('#', '-');

	osmosis  
    .get(`https://www.overbuff.com/players/pc/${query}?mode=competitive`)
    .find('.layout-header')
	.set({
		'LastPlayed': '.smaller span',
		'LastUpdated': '.refresh-status',
		'Rank': '.color-stat-rating',
		'Wins': '.color-stat-win',
		'Losses': '.color-stat-loss'
	})
    .data((data) => {
		console.log(data);
        message.channel.sendMessage('```Javascript' +
									'\nBattle Tag: ' + battle_tag + 
									'\nPlayed ' + data.LastPlayed + " ago" +
									'\n' + data.LastUpdated + " ago" +
									'\nRank: ' + data.Rank +
									'\nWins-Losses: ' + data.Wins + '-' + data.Losses +
									'\nWin rate: ' + (parseInt(data.Wins) / (parseInt(data.Wins) + parseInt(data.Losses))).toFixed(2) +
									'```');
    })
	.error((err) => {
		message.channel.sendMessage('`Battle tag not found. Must be case sensitive`');
	})
}