RisePay-NodeJS
==============

A Node.js module for interacting with the RisePay API


First require RisePay

	
	var Risepay = require('../lib/risepay');

	Risepay.connect({
			username: "YourUserName",
			password: "YourPassword" 
		});

Make Sale - make a purchase using a credit card
	
	Risepay.sale({
								  	cardholdername: "Jhonny",
									CardNum : "4242424242424242",
									ExpDate : "1114",
									Amount: 10,
									TransType: "Auth",
									CVNum: "123",
									InvNum: "ABC123",
									Zip: Zip,
									Street: Street,
									}, function(data){
										console.log(data);
										});		

TransType				
	Identifies the type of credit card transaction being made. Valid values are:
	
		- Sale : make a purchase using a credit card
		- Auth : authorize the amount on a credit card
		- Return : credits the card holder’s account

	
To see what you can do with the RisePay API, take a look at their [documentation](https://gateway1.risepay.com/vt/nethelp/default.htm?turl=Documents%2Fsoapimplementation.htm).


