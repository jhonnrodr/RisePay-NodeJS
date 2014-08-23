
var key, secret, merchant;


var Config = {};

Config.connect = function(publicKey, privateKey, merchantId){
	key = publicKey;
	secret = privateKey;
	merchant = merchantId;
}


module.exports = Config;