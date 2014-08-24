RisePay-NodeJS
==============

A Node.js module for interacting with the RisePay API

`npm install risepay`

First require RisePay

	
	var risePay = require('../lib/risepay');

	risePay.connect({
			username: "YourUserName",
			password: "YourPassword" 
		});

How to use
	
	risePay.auth({
		CardNum : CardNum,
		ExpDate : ExpDate,
		Amount: Amount
		}, function(data){
			console.log();
			});	

To see what you can do with the RisePay API, take a look at their documentation.


