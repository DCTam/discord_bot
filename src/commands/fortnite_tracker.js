
module.exports = (message,key) => {
	let rp = require('request');
	let username = message.content.split(" ")[1];
    let apiKey = key.content;
    let platform = 'pc';
    let url = `https://api.fortnitetracker.com/v1/profile/${platform}/${username}`;
    request({
        url: url,
        json: true,
        headers:{
           'TRN-Api-Key': `${apiKey}`;
        }
    }),
        function(error, res, body){
            if(error){
                message.channel.sendMessage('`Error retrieving account stats`');
                console.log("It triggered an error");
				return;
            }
            if(body.cod == 200){               
                messsage.channel.sendMessage('```Javascript'+
                                               'Username:'+ body.epicUserHandle+'\n'+
                                               'TRN Rating(Elo): '+ body.stats.p9.trnRating.displayValue+ '\n'+ 
                                               'Percentile: '+body.stats.p9.trnRating.percentile+'\n'+
                                               'Squad Win Rate: '+body.stats.p9.winRatio.value+'\n'+
                                               'Squad KDR: '+body.stats.p9.kd.value
                                             );
                console.log('Success');
	       }
           else {
		          message.channel.sendMessage('`Your account doesnt exist or your input is incorrect`');
                  console.log('Account non-existent');
           }
        
    }
}