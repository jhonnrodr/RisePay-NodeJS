//Jhonnatan es mi idolo porque me enseño NodeJS ersion rapida

var https = require('https'),
	url = require('url');
	var querystring = require('querystring');
	var request = require('request');

var username, password;


var Risepay = {};

	Risepay.connect = function(authData){
		username = authData.username;
		password = authData.password;
		
	}


	Risepay.createTransaction = function(options, callback){

								Post(options,function(err, res){
							  if (err) {
							    console.log(err);
							  } else {
							  	
							    callback(res);
							  }

								});
	}


function Post(ops, callback){

			var url = 'https://gateway1.risepay.com/ws/transact.asmx/ProcessCreditCard?';

			var form = {
				UserName: username,
				Password: password,
				TransType: ops.TransType,
			    CardNum: ops.CardNum,
			    ExpDate: ops.ExpDate,
			    Amount: ops.Amount,
			    NameOnCard: ops.cardholdername,
			    PNRef: ops.PNRef,
				ExtData: ops.ExtData,
				CVNum: ops.CVNum,
				InvNum: ops.InvNum,
				Zip: ops.Zip,
				Street: ops.Street,
							};

			var formData = querystring.stringify(form);
			var contentLength = formData.length;

			var headers = { 
			    'Content-Type' : 'application/x-www-form-urlencoded',
			    'Content-Length': contentLength 
			};
				
			request.post({ url: url, form: formData, headers: headers }, function (e, r, body) {
			   callback(body);
			});

}


module.exports = Risepay;