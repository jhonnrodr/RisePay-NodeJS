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
NPM install
	
	npm install risepay

Require RisePay
	
	var Risepay = require('risepay');

	Risepay.connect({
			username: "gatewayApiUser",
			password: "userPassword" 
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


	
To see complete list of an extra RisePay API variables, take a look at their <a href='https://gateway1.risepay.com/vt/nethelp/Documents/processcreditcard.htm'>documentation</a>.


