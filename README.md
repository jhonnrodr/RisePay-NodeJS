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
	
	risePay.createTransaction({
		CardNum : CardNum,
		ExpDate : ExpDate,
		Amount: Amount,
		TransType: "AUTH"
		}, function(data){
			var json = JSON.parse(data);
			console.log(json);
			});	

To see what you can do with the RisePay API, take a look at their [documentation](https://gateway1.risepay.com/vt/nethelp/default.htm?turl=Documents%2Fsoapimplementation.htm).


