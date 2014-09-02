RisePay-NodeJS -- Simple Risepay Payment API wrapper

A Node.js module for interacting with the RisePay API

<hr>
### Table of Contents
**[Initialization](#initialization)**

**[Sale Transaction](#sale-transaction)**

**[Auth Transaction](#authorization-transaction)**

**[Void Transaction](#void-transaction)**

**[Return Transaction](#return-transaction)**

**[Capture Transaction](#capture-transaction)**



### Initialization
First require RisePay

	
	var Risepay = require('../lib/risepay');

	Risepay.connect({
			username: "YourUserName",
			password: "YourPassword" 
		});

### Sale Transaction
To make a purchase using a credit card:
	
	Risepay.sale({
					cardholdername: "Jhonny",
					CardNum : "4242424242424242",
					ExpDate : "1114",
					Amount: 10,
					CVNum: "123",
					InvNum: "ABC123",
					Zip: Zip,
					Street: Street,
						}, function(data){
							console.log(data);
										});		

### Authorization Transaction
To make an authorization using a credit card:

	Risepay.auth({
					cardholdername: "Jhonny",
					CardNum : "4242424242424242",
					ExpDate : "1114",
					Amount: 10,
					CVNum: "123",
					InvNum: "ABC123",
					Zip: Zip,
					Street: Street,
						}, function(data){
							console.log(data);
										});		

### Void Transaction

To void a transaction:

	Risepay.void({
					cardholdername: "Jhonny",
					CardNum : "4242424242424242",
					ExpDate : "1114",
					Amount: 10,
					CVNum: "123",
					InvNum: "ABC123",
					PNRef: 242123
					Zip: Zip,
					Street: Street,
						}, function(data){
							console.log(data);
										});	

### Capture Transaction

To capture a previously Authorized transaction:
	
	Risepay.capture({
					cardholdername: "Jhonny",
					CardNum : "4242424242424242",
					ExpDate : "1114",
					Amount: 10,
					CVNum: "123",
					InvNum: "ABC123",
					PNRef: 242123
					Zip: Zip,
					Street: Street,
						}, function(data){
							console.log(data);
										});	


### Return Transaction

To return a payment for already batched transaction:
	
	Risepay.return({
					cardholdername: "Jhonny",
					CardNum : "4242424242424242",
					ExpDate : "1114",
					Amount: 10,
					CVNum: "123",
					InvNum: "ABC123",
					PNRef: 242123
					Zip: Zip,
					Street: Street,
						}, function(data){
							console.log(data);
										});	


	
To see what you can do with the RisePay API, take a look at their [documentation](https://gateway1.risepay.com/vt/nethelp/default.htm?turl=Documents%2Fsoapimplementation.htm).


