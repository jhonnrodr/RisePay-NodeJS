var risepay = require('../models/risepay');

risepay.connect("YourPublicKey", "YourPrivateKey", "YourMerchantId" );

var Payments = {};

Payments.createTransaction = function(data, callback) {
	

	callback();
}


module.exports = Payments;