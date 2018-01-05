module.exports = (message) => {

	const rp = require('request-promise');

	const coinSymbol = message.content.split(" ")[1];

	if (coinSymbol === "donald") {
		rp({
			url: `https://api.coinmarketcap.com/v1/ticker/`,
			json: true,
			method: 'GET'
			})
		.then((response) => {
			response.forEach((coin) => {
				switch (coin.symbol) {
					case 'REQ': printCoinInformation(coin); break;
					case 'VEN': printCoinInformation(coin); break;
					case 'XLM': printCoinInformation(coin); break;
					case 'XRP': printCoinInformation(coin); break;
					default: break;
				}
			});			
		});
	}
	else if (coinSymbol === "david") {
		rp({
			url: `https://api.coinmarketcap.com/v1/ticker/`,
			json: true,
			method: 'GET'
			})
		.then((response) => {
			response.forEach((coin) => {
				switch (coin.symbol) {
					case 'BTC': printCoinInformation(coin); break;
					case 'XRP': printCoinInformation(coin); break;
					case 'ETH': printCoinInformation(coin); break;
					case 'ADA': printCoinInformation(coin); break;
					case 'TRX': printCoinInformation(coin); break;
					case 'XLM': printCoinInformation(coin); break;
					case 'MIOTA': printCoinInformation(coin); break;
					case 'ICX': printCoinInformation(coin); break;
					case 'XVG': printCoinInformation(coin); break;
					default: break;
				}
			});			
		});
	}
	else {
		rp({
			url: `https://api.coinmarketcap.com/v1/ticker/${coinSymbol}`,
			json: true,
			method: 'GET'
			})
		.then((response) => {
			
			if(response) {
				printCoinInformation(response[0]);
			}
			else {
				message.channel.sendMessage('Invalid coin name.');
			}
			
		});
	}

	function printCoinInformation(coin) {

		message.channel.sendMessage('```javascript\n' + 
				'Name: ' + coin.name + 
				'\nUSD: ' + coin.price_usd +
				'\nPercent changed past hour: ' + coin.percent_change_1h +
				'\nPercent changed past day: ' + coin.percent_change_24h +
				'\nPercent changed past week: ' + coin.percent_change_7d +
				'```');
	}
}
