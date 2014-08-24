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

TransType				
	Identifies the type of credit card transaction being made. Valid values are:
		- Sale : make a purchase using a credit card
		- Auth : authorize the amount on a credit card
		- Return : credits the card holder’s account

	
To see what you can do with the RisePay API, take a look at their [documentation](https://gateway1.risepay.com/vt/nethelp/default.htm?turl=Documents%2Fsoapimplementation.htm).


