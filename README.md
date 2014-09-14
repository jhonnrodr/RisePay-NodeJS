RisePay-NodeJS -- Simple Risepay Payment API wrapper

A Node.js module for interacting with the RisePay API

<hr>
You can request developer credentials from our <a href='http://sales.risepay.com/rise-dev-access.html'>Dev Portal</a>.</br> If you would like to certify your application, then submit a <a href='http://sales.risepay.com/rise-cert-lab-access.html'>Cert Lab request</a>.
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

  ```javascript
  npm install risepay
  ```

Require RisePay
  ```	
  var risePay = require('risepay');

  risePay.connect({
  username: "gatewayApiUser",
  password: "userPassword" 
  });
  ```

### Sale Transaction
To make a purchase using a credit card:
	
	risePay.sale({
			NameOnCard: "Jhonny",
			CardNum : "5149612222222229",
			ExpDate : "1214",
			Amount: 10,
			CVNum: "678"
		}, function(resp){
			if(resp.Approved){
				res.send("Approved. Transaction ID = " + resp.PNRef);
				res.send("AuthCode = " + resp.AuthCode)
			}else{
				res.send("Declined: " + resp.RespMSG);
			}
		});	

### Authorization Transaction
To make an authorization using a credit card:

	risePay.auth({
			NameOnCard: "Jhonny",
			CardNum : "5149612222222229",
			ExpDate : "1214",
			Amount: 10,
			CVNum: "678"
		}, function(resp){
			if(resp.Approved){
				res.send("Approved. Transaction ID = " + resp.PNRef);
				res.send("AuthCode = " + resp.AuthCode)
			}else{
				res.send("Declined: " + resp.RespMSG);
			}	
		});	

### Void Transaction

To void a transaction:

	risePay.void({
			NameOnCard: "Jhonny",
			CardNum : "5149612222222229",
			ExpDate : "1214",
			Amount: 5,
			CVNum: "678",
			PNRef: 1104825
		}, function(resp){
			if(resp.Approved){
				res.send("Approved. Transaction ID = " + resp.PNRef);
				res.send("AuthCode = " + resp.AuthCode)
			}else{
				res.send("Declined: " + resp.Message);
			}
		});	

### Capture Transaction

To capture a previously Authorized transaction:
	
	risePay.capture({
			NameOnCard: "Jhonny",
			CardNum : "5149612222222229",
			ExpDate : "1214",
			Amount: 5,
			CVNum: "678",
			PNRef: 1104825
		}, function(resp){
			if(resp.Approved){
				res.send("Approved. Transaction ID = " + resp.PNRef);
				res.send("AuthCode = " + resp.AuthCode)
			}else{
				res.send("Declined: " + resp.Message);
			}
		});	


### Return Transaction

To return a payment for already batched transaction:
	
	risePay.return({
			NameOnCard: "Jhonny",
			CardNum : "5149612222222229",
			ExpDate : "1214",
			Amount: 12,
			CVNum: "678",
			PNRef: 1104841
		}, function(resp){
			if(resp.Approved){
				res.send("Approved. Transaction ID = " + resp.PNRef);
				res.send("AuthCode = " + resp.AuthCode)
			}else{
				res.send("Declined: " + resp.RespMSG);
			}
		});	


	
To see complete list of RisePay API variables, review our <a href='https://gateway1.risepay.com/vt/nethelp/Documents/processcreditcard.htm'>online documentation</a>. </br> You can request developer credentials from our <a href='http://sales.risepay.com/rise-dev-access.html'>Dev Portal</a>.  If you would like to certify your application, then submit a <a href='http://sales.risepay.com/rise-cert-lab-access.html'>Cert Lab request</a>.


