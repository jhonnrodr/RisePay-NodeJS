var Risepay = require('../lib/risepay');

Risepay.connect("YourUserName", "YourPassword");

var Payments = {};

Payments.createTransaction = function(data, callback) {
	
	

	callback();
}


module.exports = Payments;